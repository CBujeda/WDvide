package com.wdvide.app.controllers.pub;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	/***** GET THE PAGES *****/

    @GetMapping("/")
    public String get_home_0() {
        return "home"; // Esto devuelve la plantilla Thymeleaf "login.html"
    }
}
	