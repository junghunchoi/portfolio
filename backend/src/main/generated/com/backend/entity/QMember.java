package com.backend.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMember is a Querydsl query type for Member
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMember extends EntityPathBase<Member> {

    private static final long serialVersionUID = 1128092830L;

    public static final QMember member = new QMember("member1");

    public final com.backend.entity.common.QBaseEntity _super = new com.backend.entity.common.QBaseEntity(this);

    public final BooleanPath del = createBoolean("del");

    public final StringPath email = createString("email");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    public final StringPath password = createString("password");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final SetPath<MemberRole, EnumPath<MemberRole>> roleSet = this.<MemberRole, EnumPath<MemberRole>>createSet("roleSet", MemberRole.class, EnumPath.class, PathInits.DIRECT2);

    public final BooleanPath social = createBoolean("social");

    public final StringPath username = createString("username");

    public final StringPath userRealName = createString("userRealName");

    public QMember(String variable) {
        super(Member.class, forVariable(variable));
    }

    public QMember(Path<? extends Member> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMember(PathMetadata metadata) {
        super(Member.class, metadata);
    }

}

