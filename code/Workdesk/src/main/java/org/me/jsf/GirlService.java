package org.me.jsf;

import java.io.Serializable;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Service;

@Service("girlService")
public class GirlService implements Serializable{

	@PersistenceContext
	private EntityManager em;
	
	public List<GirlImg> getGirls(){
    	String hql = "from GirlImg order by alterdate desc";
    	return em.createQuery(hql,GirlImg.class).getResultList();
    }
}
