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


// Determines to what language should the word be converted.
function WordClassifier(str)
{
    if(IsAbbreviation(str))
    {
        return "ToEnglish";
    }

    if(str == "\n")
    {
        return "ToEnglish";
    }

    if(ContainsOnlyASCIIChars(str))
    {
        return "ToForeign";
    }

    return "ToEnglish"
}

//Checks if the word is an Abbreviation. To review the list of abbreviations,
// please refer to EnglishAbbreviations.js.
function IsAbbreviation(str)
{
    return englishAbbreviations.includes(str);
}

// If word contains only ASCII characters, then it must be intended to be Hebrew/Arabic/Greek etc.
function ContainsOnlyASCIIChars(str)
{
    return /^[\x00-\x7F]+$/.test(str);
}