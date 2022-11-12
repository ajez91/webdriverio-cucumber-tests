import { Given, When, Then } from '@wdio/cucumber-framework';
import * as chai from 'chai'

Given(/^Google page is opened$/, async ()=>{
    await browser.url("http://www.google.com")
    await $('(//div/div/button)[4]').click()
})

When(/^Search with (.*)$/, async (searchItem)=> {
    console.log('>>>Search item: ' + searchItem)
    let ele : any = await $("[name=q]")
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on first search result$/, async()=>{
    let ele : any = await $('<h3>')
    await ele.click()
})

Then(/^URL should match (.*)$/, async (expectedUrl)=>{
    console.log('>>> Expected Url: ' + expectedUrl)
    let url : any = await browser.getUrl();
    chai.expect(url).to.equal(expectedUrl)
})

