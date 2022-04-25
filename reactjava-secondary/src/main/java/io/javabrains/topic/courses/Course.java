package io.javabrains.topic.courses;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import io.javabrains.topic.Topic;
import java.lang.annotation.Inherited;


@Entity
public class Course {

	@Id
	private int id;
	private String name;
	private String description;
	@ManyToOne
	private Topic topic;

	public Course() {

	}

	public Course(int id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.topic = new Topic(id, "", "");
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;

	}

	public void setTopic(Topic topicId) {
		this.topic = topicId;
	}
}