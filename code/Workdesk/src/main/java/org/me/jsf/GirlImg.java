package org.me.jsf;

import java.io.Serializable;
import javax.persistence.*;

import org.springframework.stereotype.Component;

import java.util.Date;


/**
 * The persistent class for the girl_img database table.
 * 
 */
@Component
@Entity
@Table(name="girl_img")
public class GirlImg implements Serializable {
	private static final long serialVersionUID = 1L;
	private String guid;
	private Date alterdate;
	private String alttext;
	private Date createdate;
	private String fromsite;
	private int height;
	private String imgurl;
	private int width;

    public GirlImg() {
    }


	@Id
	public String getGuid() {
		return this.guid;
	}

	public void setGuid(String guid) {
		this.guid = guid;
	}


    @Temporal( TemporalType.TIMESTAMP)
	public Date getAlterdate() {
		return this.alterdate;
	}

	public void setAlterdate(Date alterdate) {
		this.alterdate = alterdate;
	}


	public String getAlttext() {
		return this.alttext;
	}

	public void setAlttext(String alttext) {
		this.alttext = alttext;
	}


    @Temporal( TemporalType.TIMESTAMP)
	public Date getCreatedate() {
		return this.createdate;
	}

	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}


	public String getFromsite() {
		return this.fromsite;
	}

	public void setFromsite(String fromsite) {
		this.fromsite = fromsite;
	}


	public int getHeight() {
		return this.height;
	}

	public void setHeight(int height) {
		this.height = height;
	}


	public String getImgurl() {
		return this.imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}


	public int getWidth() {
		return this.width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

}