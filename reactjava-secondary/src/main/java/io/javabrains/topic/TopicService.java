package io.javabrains.topic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import io.javabrains.topic.Topic;
import io.javabrains.topic.TopicRepository;

@Service
public class TopicService {
	
    @Autowired
    private TopicRepository topicRepository;

    
    public List<Topic> getAllTopics(){
        List<Topic> topics = new ArrayList<>();
        topicRepository.findAll()
        .forEach(topics::add);
        return topics;
    }

    public void addTopic(Topic topic){
        topicRepository.save(topic);
    }
    
    public void updateTopic(String id, Topic topic){
    	topicRepository.save(topic);
    	
            }
    public void deleteTopic(Topic id){
    	topicRepository.delete(id);
    }

    // changed get topic to int instead of a string
	public Topic getTopic(int id) {
		return getTopic(id);
	}

}
