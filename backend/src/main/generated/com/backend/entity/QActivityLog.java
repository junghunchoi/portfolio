package com.backend.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QActivityLog is a Querydsl query type for ActivityLog
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QActivityLog extends EntityPathBase<ActivityLog> {

    private static final long serialVersionUID = 467272241L;

    public static final QActivityLog activityLog = new QActivityLog("activityLog");

    public final com.backend.entity.common.QBaseEntity _super = new com.backend.entity.common.QBaseEntity(this);

    public final NumberPath<Integer> amount = createNumber("amount", Integer.class);

    public final NumberPath<Integer> duration = createNumber("duration", Integer.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final StringPath note = createString("note");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QActivityLog(String variable) {
        super(ActivityLog.class, forVariable(variable));
    }

    public QActivityLog(Path<? extends ActivityLog> path) {
        super(path.getType(), path.getMetadata());
    }

    public QActivityLog(PathMetadata metadata) {
        super(ActivityLog.class, metadata);
    }

}

