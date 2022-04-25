package io.javabrains.topic.courses;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

// Will get all methods from CRUD
public interface CourseRepository extends CrudRepository<Course, String> {
//	public List<Course> findByName(String name);
	public List<Course> findByTopicId(String topicId);
//	public List<Course> findByDescription(String name);

   
}
