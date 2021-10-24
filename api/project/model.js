// build your `Project` model here
const db = require("../../data/dbConfig");

async function insert(project) {
  const [id] = await db("projects").insert(project);
  const newProject = {
    project_id: id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed != 1 ? false : true,
  };
  return newProject;
}

async function getProjects() {
  const projectsInfo = await db("projects");
  console.log(projectsInfo);

  const projectInfoUpdated = projectsInfo.map((e) => {
    return {
      project_name: e.project_name,
      project_description: e.project_description,
      project_completed: e.project_completed != 1 ? false : true,
    };
  });

  return projectInfoUpdated;
}

module.exports = {
  getProjects,
  insert,
};
