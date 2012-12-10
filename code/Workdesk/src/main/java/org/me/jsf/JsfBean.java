package org.me.jsf;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Scope("view")
@Component("jsfBean")
public class JsfBean implements Serializable{

	@Resource
	private GirlService girlService;
	private String jsf = "Hello JSF";
	
	@PostConstruct
	public void page_load(){
		List<GirlImg> list = girlService.getGirls();
		System.out.println(list.size());
	}

	public String getJsf() {
		return jsf;
	}

	public void setJsf(String jsf) {
		this.jsf = jsf;
	}

	private int counter = 0;

	public int getCounter() {
		return counter;
	}

	public void setCounter(int counter) {
		this.counter = counter;
	}

	public void increment() {
		counter++;
	}

}
