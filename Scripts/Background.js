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

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: [
            'Scripts/Customer Preferences/LoaderFromLocalStorage.js',
            'Scripts/Dictionaries/HebrewDictionaries.js',
            'Scripts/Dictionaries/ArabicDictionaries.js',
            'Scripts/Language Rules/English/EnglishAbbreviations.js',
            'Scripts/Language Rules/English/EnglishRulesPerWord.js',
            'Scripts/Language Rules/General/BasicTextCheckers.js',
            'Scripts/Websites Related/SpecialDomains.js',
            'Scripts/Converters/ToHebrewConverter.js',
            'Scripts/Converters/ToArabicConverter.js',
            'Scripts/Converters/ToEnglishConverter.js',
            'Scripts/Converters/Converter.js',
            'Scripts/QGib Logic/Classifier.js',
            'Scripts/QGib Logic/QGibLogic.js'
        ]
    });
});

// Builds the Language selection menu.
chrome.contextMenus.create({
    "id": "ParentForeignLanguageSelectorMenu",
    "title": "Change your foreign language...",
    "contexts": ["all"]
});

chrome.contextMenus.create({
    id: "arabic",
    parentId: "ParentForeignLanguageSelectorMenu",
    title: "Arabic/العربية",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "hebrew",
    parentId: "ParentForeignLanguageSelectorMenu",
    title: "Hebrew/עברית",
    contexts: ["all"]
});

// Listens to clicks on the foreign language selection menu and triggers a saving to local storage task.
chrome.contextMenus.onClicked.addListener(function(info, tab)
{
    SaveForeignLanguagePreference(info.menuItemId);
});

// Saves the foreign language preference to local storage
function SaveForeignLanguagePreference(selection)
{
    chrome.storage.local.set(
        {
            foreignLanguageSelection: selection
        }
    );
}




