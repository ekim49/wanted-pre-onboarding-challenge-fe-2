/**\
 * @file 원티드 프리온보딩 프론트엔드 2월 챌린지 사전 과제 JSDoc
 * @author ekim49
 * @see <a href="https://github.com/ekim49/wanted-pre-onboarding-challenge-ts" >https://github.com/ekim49/wanted-pre-onboarding-challenge-ts </a>
 */

/**
 * Todo 객체
 * @param {Object} todoData - Todo의 정보가 담긴 객체
 * @property {number} id - Todo의 식별 번호
 * @property {string} content - Todo의 내용
 * @property {boolean} isDone - Todo의 완료 여부
 * @property {string} catetory - Todo의 카테고리
 * @property {string[]} [tags] - Todo의 태그
 */
class Todo {
	constructor(todoData) {
		this.id = todoData.id;
		this.content = todoData.content;
		this.isDone = todoData.isDone;
		this.category = todoData.category;
		this.tags = todoData.tags;
	}
}

/**
 * Tag 객체
 * @param {Object} tagData - 태그의 정보가 담긴 객체
 * @property {number} tagId - 태그의 식별 번호
 * @property {string} tagTitle - 태그의 제목
 */
class Tag {
	constructor(tagData) {
		this.id = tagData.id;
		this.title = tagData.title;
	}
}

/**
 * Todo를 추가할 수 있다.
 * (단, 내용 없이 추가할 수 없다.)
 * @param {Object} todoData - 새 Todo의 property를 담은 객체
 * @param {string} todoData.content - {@link Todo}.content
 * @param {string} todoData.isDone - {@link Todo}.isDone
 * @param {string} todoData.category - {@link Todo}.category
 * @param {string[]} todoData.tags - {@link Todo}.tags
 */
function createTodo(todoData) {}

/**
 * ID를 기반으로 특정 Todo을 조회할 수 있다.
 * @param {number} id - {@link Todo}.id
 * @returns {Todo} 특정 id를 가진 개별 Todo가 반환된다.
 */
function getTodo(id) {}

/**
 * 모든 Todo를 조회할 수 있다.
 * @returns {Todo[]} - 모든 Todo가 나열된 배열을 반환한다.
 */
function getAllTodos() {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {number} id - {@link Todo}.id
 * @param {string} todoData.content - {@link Todo}.content
 * @param {boolean} todoData.isDone - {@link Todo}.isDone
 * @param {string} todoData.category - {@link Todo}.category
 * @param {string[]} todoData.tags - {@link Todo}.tags
 */
function updateTodo() {}

/**
 * ID를 기반으로 특정 Todo를 삭제할 수 있다.
 * @param {number} id - {@link Todo}.id
 */
function deleteTodo() {}

/**
 * 모든 Todo를 제거할 수 있다.
 */
function deleteAllTodos() {}

/**
 * 특정 Todo의 특정 태그를 수정할 수 있다.
 * @param {number} id - {@link Todo}.id
 * @param {string} tagTitle - {@link Tag}.title
 */
function updateTag() {}

/**
 * 특정 Todo의 특정 태그를 삭제할 수 있다.
 * @param {number} id - {@link Todo}.id
 * @param {number} tagId - {@link Tag}.id
 */
function deleteTag(id, tagId) {}

/**
 * 특정 Todo의 모든 태그를 제거할 수 있다.
 * @param {number} id - {@link Todo}.id
 */
function deleteAllTags(id) {}
