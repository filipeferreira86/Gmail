package Elementos;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CampoEntrada {
	
	private WebDriver driver;
	private WebElement campoEntrada;
	
	public CampoEntrada(WebDriver d) {
		this.driver = d;
	}
	
	public void achaComId(String id) {
		this.campoEntrada = driver.findElement(By.id(id));
	}
	
	public void achaComName(String name) {
		this.campoEntrada = driver.findElement(By.name(name));
	}
	
	public void achaComXPath(String xPath) {
		this.campoEntrada = driver.findElement(By.xpath(xPath));
	}
	
	public void teclar(String texto) {
		this.campoEntrada.sendKeys(texto);
	}
	
	public String pegaTexto() {
		return campoEntrada.getText();
	}
	
	public void clica() {
		campoEntrada.click();
	}
	
}