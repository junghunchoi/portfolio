package com.backend.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QHelp is a Querydsl query type for Help
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHelp extends EntityPathBase<Help> {

    private static final long serialVersionUID = 152980037L;

    public static final QHelp help = new QHelp("help");

    public final com.backend.entity.common.QBaseEntity _super = new com.backend.entity.common.QBaseEntity(this);

    public final StringPath answer = createString("answer");

    public final StringPath content = createString("content");

    public final NumberPath<Long> hno = createNumber("hno", Long.class);

    public final NumberPath<Integer> isSecret = createNumber("isSecret", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final StringPath title = createString("title");

    public final NumberPath<Long> viewCount = createNumber("viewCount", Long.class);

    public final StringPath writer = createString("writer");

    public QHelp(String variable) {
        super(Help.class, forVariable(variable));
    }

    public QHelp(Path<? extends Help> path) {
        super(path.getType(), path.getMetadata());
    }

    public QHelp(PathMetadata metadata) {
        super(Help.class, metadata);
    }

}

