package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/Google1.feature",
		glue = {"stepdefinition1"},
	    plugin = {"pretty", "html:target/reports"},
		monochrome = true //formating
		)

public class TestRunner {

}
