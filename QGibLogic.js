/*****************************************************
 * QGib™ License and agreement:
 * QGib™ developed by CUCUMBER an OrSN Company ("Cucumber") is an open-source web-browser extension that manipulates text, per the
 * user request. The software is provided as-is and shall not be copied to other projects without Cucumber's written consent.
 *
 * By using the software, you release Cucumber, its employees and its affiliates from any claim and/or demand and/or complaint.
 * You will not seek any damages nor compensation as a result of using this software.
 *
 * By contributing code/content/ideas to this project you agree that:
 * 1. Your submissions and their contents can be used by Cucumber and its affiliates without any compensation to you.
 * 2. Cucumber may use or redistribute the submissions and their contents for any purpose and in any way.
 * 3. There is no obligation for Cucumber to review the submissions or to keep them confidential.
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

var foreignToEnglishDictionaries = [];


Main();

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
    //todo:
    // 1. Parse the text to words. Ensure that you consider \n as a word!
    // 2. For each word determine if it's in English
    // 3. If so, convert it to Hebrew/Arabic
    // 4. If not, convert it to English
    // 5. Append the output of 3/4 to an output text
    // 6. Once all done, return it back to main for further treatment.

    let demoText = "Hello,I'm Or.\n And  I love to program.very much!\nSincerely123.123 1";
    let demoText2 = "Hello, \n I'm Or, And Welcome to Bar-Ilan University, Israel ! ";
    let demoText3 = "The first few elements in Fibonacci series are: 0, 1, 1, 2, 3, 5,8, 13, etc..."

    // var arrayOfWords = TextParser(demoText3);

    // alert(arrayOfWords);
    var arrayOfWords = TextParser(selectedText);

    arrayOfWords = ClassifiesWords(arrayOfWords);

    arrayOfWords = BasicTextCorrecting(arrayOfWords);

    return ArrayToStringConverter(arrayOfWords);
}

// Parsing the text to an array of words.
// If we're before converting, then we only want to parse by whitespaces. In that case, wasProcessed = false.
// After converting, we want to apply basic writing rules. Therefore we will call the function with wasProcessed = true.
function TextParser(text, wasProcessed = false)
{
    //
    let output = "";

    if(wasProcessed)
    {
        output = text.split(/(?<=\w)([ .?,!]+)/);
    }
    else
    {
        output = text.split(/(?<=\w)([ ]+)/);
    }

    return output;
}

function ClassifiesWords(arrayOfWords)
{
    let output = "";

    for(let index = 0; index < arrayOfWords.length; index++)
    {
        if(WordClassifier(arrayOfWords[index]) == "ToForeign")
        {
            //todo: Get the customer preference in regards to their preferred language.
            output += ConvertWordToHebrew(arrayOfWords[index]);

            continue;
        }

        output += ConvertWordToEnglish(arrayOfWords[index]);
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

function ConvertWordToEnglish(word)
{

}

// Replacing the selected text of the customer with the output generated.
function ReplaceText(inputText)
{
    var textArea = document.activeElement;

    let start;

    let finish;


    if(textType == "textContent")
    {
        start = window.getSelection().anchorOffset;

        finish = window.getSelection().focusOffset;
    }

    else
    {
        start = textArea.selectionStart;

        finish = textArea.selectionEnd;
    }

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