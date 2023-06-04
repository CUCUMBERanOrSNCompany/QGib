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

// This script is running basic checks on English words
function BasicEnglishEnforcerPerWord(word)
{
    if(IsI(word))
    {
        return "I";
    }

    if(IncludesMc(word))
    {
        return FormatAMc(word);
    }

    return word;
}

// Checks if the word is "i" or "I"
function IsI(word)
{
    return (word === "i" || (word === "I"))
}

// Checks if the word starts with Mc
function IncludesMc(word)
{
    return (word.length > 2 &&
        (word[0] === "m" || word[0] === "M") &&
        (word[1] === "c" || word[1] === "C"))
}

// Styles a word that starts with Mc correctly.
function FormatAMc(word)
{
    return "Mc" + word[2].toUpperCase() + word.slice(3);
}