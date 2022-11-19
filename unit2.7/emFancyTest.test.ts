import {Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import {emManager} from "./emFancyPants";
const employeePage = new emManager(driver);

class Interns {
    name: string;
    phone: number;
    title: string;
    constructor(name: string, phone: number, title: string) {
        this.name = name;
        this.phone = phone;
        this.title = title;
    };
};

let newInterns: Array<Interns> = [
    new Interns("Blosson", 1234567890, "Power Puff Girl"),
    new Interns("Buttercup", 1234567890, "Power Puff Girl"),
    new Interns("Bubbles", 1234567890, "Power Puff Girl"),
    new Interns("Miss Sara Bellum", 7889788978, "Secretary")
]

let addEmp = async (newInterns) => {
    await employeePage.click(employeePage.addEmployee);
    await employeePage.click(employeePage.newEmployee);
    await employeePage.click(employeePage.nameField);
    await employeePage.setInput(employeePage.nameField, newInterns.name);
    await employeePage.click(employeePage.phoneField);
    await employeePage.setInput(employeePage.phoneField, newInterns.phone);
    await employeePage.click(employeePage.titleField);
    await employeePage.setInput(employeePage.titleField, newInterns.title);
    await employeePage.click(employeePage.saveButton);
    await employeePage.driver.sleep(3000);
};

describe("should add employees to employee manager", () => {
    test("can add employees using array", async () => {
        await employeePage.navigate();
        for(let i = 0; i < newInterns.length; i++) {
            await addEmp(newInterns[i]);
        };
        await employeePage.driver.quit();
    });
});