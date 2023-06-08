/*****************************************************
 * QGib™ License and agreement:
 * QGib™ developed by CUCUMBER an OrSN Company ("Cucumber") is an open-source web-browser extension that manipulates text, per the
 * user request. The software is provided as-is and shall not be copied to other projects without Cucumber's written consent,
 * nor redistributed by any other party.
 *
 * By using the software, you release Cucumber, its employees and its affiliates from any claim and/or demand and/or complaint.
 * You will not seek any damages nor compensation as a result of using this software.
 *
 * By contributing code/content/ideas to this project you agree that:
 * 1. Your submissions and their contents can be used by Cucumber and its affiliates without any compensation to you.
 * 2. Cucumber may use or redistribute the submissions and their contents for any purpose and in any way.
 * 3. You will not contribute code to this project that contains malicious software/scripts/viruses or
 * any other code that might harm others.
 * 4. There is no obligation for Cucumber to review the submissions or to keep them confidential.
 *
 * Cucumber reserves its rights to change this agreement at anytime, without a prior notice and to cease distributing this
 * project as an open-source as a whole or parts of it, at present or at the future.
 *
 * Please feel free to contact Cucumber with any question that you may have at:
 * HelpDeskCucumber@Yahoo.Com
 *******************************************************/

// The selected text which we'll manipulate
var selectedText = window.getSelection().toString();

// All text in the component from which the reader selected text
var allText;

// The type of the text component: TextContent/Value/Something else
var textType;

// Contains the foreign dictionaries
var foreignToEnglishDictionaries = [
    arabicToEnglishDict,
    hebrewToEnglishDict
];

// Loading the selected foreign language using LoaderFromLocalStorage.js
LoadForeignLanguagePreference(function (foreignLanguageSelection)
{
    foreignLanguagePreference = foreignLanguageSelection;

    Main();
});

function Main()
{
    if(!CheckIfTextIsEditable())
    {
        return;
    }

    // Updates allText and textType
    GetAllTextAndType();

    let textToConvert = ConvertText();

    ReplaceText(textToConvert);
}

// This function checks if the text selected is in a text box of some sort
// and not in an area at the website that the reader cannot modify.
function CheckIfTextIsEditable()
{
    if(!selectedText.toString().trim()) {
        // there is no selection
        // or selection is white-space
        // or selection is in textarea, input

        return false;
    }

    else if (document.activeElement.isContentEditable) {
        // alert(document.activeElement.getElementId);
        // it is in contentEditable element
        // alert("Selected text in editable element");

        return true;
    }

    return ['TEXTAREA', 'INPUT'].includes(document.activeElement.nodeName);
}

// Checks if the website saves the reader's input in textContent or value.
function GetAllTextAndType()
{
    // Trying to get the text from the textContent component
    allText = document.activeElement.textContent;

    textType = "textContent";

    // If failed, then the reader's text is in the value component instead.
    if(!allText)
    {
        allText = document.activeElement.value;

        textType = "value";
    }
}

// Converting the text from one language to another.
function ConvertText()
{
    var arrayOfWords = TextParser(selectedText);

    arrayOfWords = ConvertingWords(arrayOfWords);

    arrayOfWords = BasicTextCorrecting(arrayOfWords);

    return ArrayToStringConverter(arrayOfWords);
}

// Parsing the text to an array of words.
// If we're before converting, then we only want to parse by whitespaces. In that case, wasProcessed = false.
// After converting, we want to apply basic writing rules. Therefore we will call the function with wasProcessed = true.
function TextParser(text, wasProcessed = false)
{
    let output = [];

    // The text was processed, hence it is safe to separate punctuation
    // from the words and prepare them for post-processing
    if(wasProcessed)
    {
        output = text.split(/([ !?,.]+)/).filter(Boolean);
    }
    // The punctuation might be part of the word that needs to be converted.
    else
    {
        output = text.split(/(?<=\w)([ ]+)/);
    }

    return output;
}

// Getting an array of words, and converting each word
function ConvertingWords(arrayOfWords)
{
    let output = "";

    for(let index = 0; index < arrayOfWords.length; index++)
    {
        output += WordConverter(word = arrayOfWords[index],
            classification = WordClassifier(arrayOfWords[index]));
    }

    return TextParser(text = output, wasProcessed = true);
}

// Performing basic text correcting such as removing redundant spaces, or adding a space after a comma/period etc
function BasicTextCorrecting(arrayOfWords)
{
    // For list of checks, please refer to BasicTextChecker.js
    for(let index = 0; index < arrayOfWords.length; index++)
    {
        arrayOfWords[index] = BasicCorrecter(arrayOfWords[index]);
    }

    //alert(arrayOfWords);
    return arrayOfWords;
}

// Converting an array of words to a string.
function ArrayToStringConverter(arrayOfWords)
{
    let output = "";

    for(let index = 0; index < arrayOfWords.length; index++)
    {
        output += arrayOfWords[index];
    }

    return output;
}

// Replacing the selected text of the customer with the output generated.
function ReplaceText(inputText)
{
    var textArea = document.activeElement;

    let start = GetStart();

    let finish = GetFinish();

    let allText = "";

    if(textType == "textContent")
    {
        allText = textArea.textContent.toString();
    }

    else
    {
        allText = textArea.value.toString();
    }

    var newText = allText.substring(0, start) + inputText + allText.substring(finish, allText.length);

    let SpecialDomainChecker = IsDomainSpecial(DomainGetter());

    if(SpecialDomainChecker)
    {
        CopyTextToClipBoard(newText);

        return;
    }

    if(textType == "textContent")
    {
        textArea.textContent = newText;
    }

    else if(textType == "value")
    {
        textArea.value = newText;
    }
}

// Return the start position of the selected text
function GetStart()
{
    let textArea = document.activeElement;

    if(textType === "textContent")
    {
        return window.getSelection().anchorOffset;
    }

    return textArea.selectionStart;
}

// Return the end position of the selected text
function GetFinish()
{
    let textArea = document.activeElement;

    if(textType === "textContent")
    {
        return window.getSelection().focusOffset;
    }

    return textArea.selectionEnd;
}

// Getting the address of the highlighted page.
function DomainGetter()
{
    return window.location.href;
}

// Copies the given text to the clipboard
function CopyTextToClipBoard(text)
{
    navigator.clipboard.writeText(text);

    alert("This website doesn't supports QGib, at this time.\n" +
        "We copied the correct text to the clipboard instead.\n" +
        "Please paste it, using Ctrl + V." );
}