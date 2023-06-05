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


// Converting the given word to Arabic
function ConvertWordToArabic(word)
{
    let outputWord = "";

    for(let index = 0; index < word.length; index++)
    {
        if(!englishToArabicDict[word[index]])
        {
            outputWord += word[index];
        }

        else
        {
            outputWord += englishToArabicDict[word[index]];
        }
    }

    return outputWord
}