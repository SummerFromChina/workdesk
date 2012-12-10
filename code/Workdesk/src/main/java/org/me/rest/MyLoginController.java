package org.me.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/security")
public class MyLoginController {

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public void login(@RequestParam("username") String username) {
		System.out.println(username);
	}
}
