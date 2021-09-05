---
slug: jpa-customize-entity
title: Jpa返回自定义对象
authors: zeffon
tags: [java]
date: 2020-04-13
---

在使用 Jpa 作为持久层时，Repository 层的返回对象往往是模型继承 JpaRepository 中的对象，想要直接使用其它对象是不行的。那么我们该怎么处理呢？

<!--truncate-->

## 前文

在使用 Jpa 作为持久层时，Repository 层的返回对象往往是模型继承 JpaRepository 中的对象，想要直接使用其它对象是不行的。如果我们连表后数据不能作为一个对象返回，那么在去处理或者再去查询数据库都是不好的。所以我们在连表操作时，通过`@Query注解`里的`new 自定义的对象`,将我们需要的字段`以参数形式`传入自定义对象构造函数中，最后返回对象即可。

还有一种方法：就是将查询的处理以 Object 对象返回，然后需要转成指定的对象。(不推荐)

## 正文

### 返回对象

1. 通常 Repository 层写时，我们只能返回将模型 Dormitory 的数据返回，并不能返回其它的对象。

```java
@Repository
public interface DormitoryRepository extends JpaRepository<Dormitory, Long> {

}
```

1. 如果我们连表的话，肯定会想返回自定义的对象。

```java
@Repository
public interface DormitoryRepository extends JpaRepository<Dormitory, Long> {
    /** 获取楼号和房间号 */
    @Query("SELECT new com.zeffon.yusu.bo.DormitoryAndRoomBO(f.id, f.name, c.id, c.name)\n" +
            "FROM Dormitory c\n" +
            "LEFT JOIN Dormitory f ON f.id = c.parentId\n" +
            "WHERE c.id = :rid")
    DormitoryAndRoomBO findDormitoryAndRoom(Long rid);
}
```

1. 对应的自定义对象 DormitoryAndRoomBO 需要有相对应的构造函数

```java
@Getter
@Setter
public class DormitoryAndRoomBO {
    private Long roomId;
    private String room;
    private Long dormitoryId;
    private String dormitory;

    // 如果不想写这么麻烦的构造函数，也可以使用@AllArgsConstructor注解，不过参数要注意顺序
    public DormitoryAndRoomBO(Long dormitoryId, String dormitory, Long roomId, String room) {
        this.roomId = roomId;
        this.room = room;
        this.dormitoryId = dormitoryId;
        this.dormitory = dormitory;
    }
}
```

### 返回列表

如果返回的是列表也很简单，只需要修改 repository 中对应方法的返回类型即可

```java
@Repository
public interface DormitoryRepository extends JpaRepository<Dormitory, Long> {
    /** 获取楼号和房间号 */
    @Query("SELECT new com.zeffon.yusu.bo.DormitoryAndRoomBO(f.id, f.name, c.id, c.name)\n" +
            "FROM Dormitory c\n" +
            "LEFT JOIN Dormitory f ON f.id = c.parentId\n" +
            "WHERE c.id = :rid")
    List<DormitoryAndRoomBO> findDormitoryAndRoom(Long rid);
}
```
