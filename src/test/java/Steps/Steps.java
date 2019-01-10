package Steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import Elementos.CampoEntrada;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class Steps {

	WebDriver driver;
	CampoEntrada entEmail;
	CampoEntrada btnProxima;
	CampoEntrada entSenha;
	CampoEntrada btnLogar;
	Scenario scenario;
	
	@Before()
    public void setUp(Scenario scenario){
        this.scenario = scenario;
    }
	
	@Dado("^que estou na pagina \"([^\"]*)\"$")
	public void que_estou_na_pagina(String site) throws Throwable {
		System.setProperty("webdriver.gecko.driver", "C:/Users/filipe.jesus/Documents/Testes/scripts/jars/drivers/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get(site);
	}

	@Quando("^eu informar \"([^\"]*)\" no campo \"([^\"]*)\" #name$")
	public void eu_informar_no_campo_name(String login, String name) throws Throwable {
		entEmail = new CampoEntrada(driver);
		entEmail.achaComName(name);
		entEmail.teclar(login);
	}
	
	@Quando("^cliar no botão \"([^\"]*)\" #id$")
	public void cliar_no_botão_id(String name) throws Throwable {
		btnProxima = new CampoEntrada(driver);
		btnProxima.achaComId(name);
		btnProxima.clica();
	}


	@Quando("^informar \"([^\"]*)\" no campo \"([^\"]*)\"$")
	public void informar_no_campo(String arg1, String arg2) throws Throwable {
		entSenha = new CampoEntrada(driver);
		entSenha.achaComName(arg2);
		entSenha.teclar(arg1);
	}

	@Então("^deve logar no Gmail apresentando mensagem \"([^\"]*)\"$")
	public void deve_logar_no_Gmail_apresentando_mensagem(String arg1) throws Throwable {

	}
	
	@After
	public void fechaDriver() {
		driver.close();
	}
}
