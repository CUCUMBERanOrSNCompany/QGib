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


// Running all checks
function BasicCorrecter(str)
{
    if(IsWhitespaceString(str))
    {
        return " ";
    }

    if(IsPeriodsString(str))
    {
        return KeepPeriods(str);
    }

    if(ContainsComma(str))
    {
        return ", ";
    }

    if(ContainsExclamationOrQuestionMark(str))
    {
        return KeepExclamationAndQuestionMark(str);
    }


    return str;
}

// Checks if the string provided consists of only white spaces.
function IsWhitespaceString(str)
{
    return /^\s*$/.test(str);
}

// Checks if the string consists of periods
function IsPeriodsString(str)
{
    return dotCount = (str.match(/\./g) || []).length;
}

// Filters out all characters that aren't a period
function KeepPeriods(str)
{
    return str.replace(/[^.]/g, '') + " ";
}

// Checks if str includes a comma
function ContainsComma(str)
{
    return str.includes(",");
}

// Checks if str contains exclamation
function ContainsExclamationOrQuestionMark(str)
{
    return /[!?]/.test(str);
}

// Filters out all characters that aren't an exclamation
function KeepExclamationAndQuestionMark(str)
{
    return str.replace(/[^!?]/g, '') + " ";
}

