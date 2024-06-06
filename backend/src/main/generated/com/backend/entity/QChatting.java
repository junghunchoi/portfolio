package com.backend.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QChatting is a Querydsl query type for Chat
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QChatting extends EntityPathBase<Chat> {

    private static final long serialVersionUID = -441724086L;

    public static final QChatting chatting = new QChatting("chatting");

    public final StringPath content = createString("content");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public QChatting(String variable) {
        super(Chat.class, forVariable(variable));
    }

    public QChatting(Path<? extends Chat> path) {
        super(path.getType(), path.getMetadata());
    }

    public QChatting(PathMetadata metadata) {
        super(Chat.class, metadata);
    }

}

