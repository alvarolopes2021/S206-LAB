package br.inatel.jsonplaceholder;

import com.intuit.karate.junit5.Karate;

public class JsonPlaceholderRunner {
	@Karate.Test
	Karate testSw() {
		return Karate.run("json_placeholder").relativeTo(getClass());
	}
}
