package br.inatel.s206;

import com.intuit.karate.junit5.Karate;

public class GoRestRunner {
	@Karate.Test
	Karate testGoRest() {
		return Karate.run("gorest").relativeTo(getClass());
	}
}
