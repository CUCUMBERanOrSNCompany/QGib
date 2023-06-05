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

// This script contains a list of domains that blocks text editing by script.
// As such, if the customer activated the extension in one of these domains,
// instead of trying to change the text, just copy the correct text to the clipboard,
// and instruct them to paste the text manually.

var domainsList = [
  /^https?:\/\/(?:www\.)?facebook\.com\/.*/,
  /^https?:\/\/(?:www\.)?instagram\.com\/.*/,
  /^https?:\/\/(?:www\.)?web\.whatsapp\.com\/.*/,
  /^https?:\/\/(?:www\.)?web\.telegram\.org\/.*/

];

function IsDomainSpecial(url)
{
  for(let index = 0; index < domainsList.length; index++)
  {
    if(domainsList[index].test((url)))
    {
      return true;
    }
  }

  return false
}

function Testing()
{
  let domain = /^https?:\/\/(?:www\.)?web\.whatsapp\.com\/.*/;

  let tests = [
      "https://www.facebook.com/RealOrSN/",
    "https://www.facebook.com/",
  "https://www.google.com/",
      "https://www.com/",
  "https://www..com/",
    "https://web.whatsapp.com/"
  ];

  for(let index = 0; index < tests.length; index++)
  {
    if(domain.test(tests[index]))
    {
     alert("In");
    }
    else
    {
      alert("Not in");
    }
  }




}