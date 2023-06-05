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

// The mapping was created with the Arabic (Jordan) keyboard.
// If there are different layouts, I am not aware of, I'll appreciate your contribution!

var englishToArabicDict = {
    'a': 'ش',
    'b': 'لا',
    'c': 'ؤ',
    'd': 'ي',
    'e': 'ث',
    'f': 'ب',
    'g': 'ل',
    'h': 'ا',
    'i': 'ه',
    'j': 'ت',
    'k': 'ن',
    'l': 'م',
    'm': 'ة',
    'n': 'ى',
    'o': 'خ',
    'p': 'ح',
    'q': 'ض',
    'r': 'ق',
    's': 'س',
    't': 'ف',
    'u': 'ع',
    'v': 'ر',
    'w': 'ص',
    'x': 'ء',
    'y': 'غ',
    'z': 'ئ',
    'A': 'ِ',
    'B': 'لآ',
    'C': '}',
    'D': ']',
    'E': 'ُ',
    'F': '[ت]',
    'G': 'لأ',
    'H': 'أ',
    'I': '÷',
    'J': 'ـ',
    'K': '،',
    'L': '/',
    'M': '’',
    'N': 'آ',
    'O': '×',
    'P': '؛',
    'Q': 'َ',
    'R': 'ٌ',
    'S': 'ٍ',
    'T': 'لإ',
    'U': '‘',
    'V': '{ص}',
    'W': 'ً',
    'X': 'ْ',
    'Y': 'إ',
    'Z': '~',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠',
    '.': '٫',
    ',': '،',
    '!': '!',
    '?': '؟',
    "'": 'ء'
};

var arabicToEnglishDict = {
    'ض': 'q',
    'ص': 'w',
    'ث': 'e',
    'ق': 'r',
    'ف': 't',
    'غ': 'y',
    'ع': 'u',
    'ه': 'i',
    'خ': 'o',
    'ح': 'p',
    'ج': '[',
    'د': ']',
    'ش': 'a',
    'س': 's',
    'ي': 'd',
    'ب': 'f',
    'ل': 'g',
    'ا': 'h',
    'ت': 'j',
    'ن': 'k',
    'م': 'l',
    'ك': ';',
    'ط': "'",
    'ئ': 'z',
    'ء': 'x',
    'ؤ': 'c',
    'ر': 'v',
    'لا': 'b',
    'ى': 'n',
    'ة': 'm',
    'و': ',',
    'ز': '.',
    'ظ': '/',
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "٠": "0",
    "٫": ".",
    "،": ",",
    "!": "!",
    "؟": "?",
};