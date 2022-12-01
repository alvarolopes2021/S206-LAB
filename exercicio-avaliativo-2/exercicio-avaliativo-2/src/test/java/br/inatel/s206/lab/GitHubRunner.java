package br.inatel.s206.lab;

import com.intuit.karate.junit5.Karate;

public class GitHubRunner {
	@Karate.Test
	Karate testSw() {
		return Karate.run("git_hub").relativeTo(getClass());
	}
}
