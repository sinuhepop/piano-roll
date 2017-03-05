package tk.spop.pianoroll.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@RequestMapping("/")
	@ResponseBody
	public String home() {
		return "<html><body></script><script src='rsc/js/all.js'></script></body><html>";
	}
}
