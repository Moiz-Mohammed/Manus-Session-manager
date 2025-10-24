# DevOps Resources

## Version Control and CI/CD

### Git - Version Control

#### Official Documentation
- **URL**: [Git Documentation](https://git-scm.com/doc)
- **Description**: The official documentation for Git, a free and open source distributed version control system.
- **Content Covered**:
  - Git concepts and architecture
  - Installation and setup
  - Basic and advanced commands
  - Branching and merging
  - Remote repositories
  - Git workflows
  - Git hooks and customization

#### Key Learning Sections
- [Reference Manual](https://git-scm.com/docs) - Comprehensive command reference
- [Pro Git Book](https://git-scm.com/book/en/v2) - Free comprehensive Git book
- [Git Tutorial](https://git-scm.com/docs/gittutorial) - Introduction to Git basics
- [Everyday Git](https://git-scm.com/docs/giteveryday) - Common Git commands

#### Beginner Tutorials
- [Git Basics](https://git-scm.com/video/what-is-git) - Video introduction to Git
- [GitHub Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/) - Quick reference guide
- [Visual Git Cheat Sheet](https://ndpsoftware.com/git-cheatsheet.html) - Interactive Git command visualization
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive Git tutorial

#### Advanced Topics
- [Git Internals](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain) - How Git works under the hood
- [Git Workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows) - Different Git workflow strategies
- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) - Customizing Git behavior
- [Git Attributes](https://git-scm.com/book/en/v2/Customizing-Git-Git-Attributes) - Defining attributes for paths

#### Community Resources
- [Stack Overflow - Git](https://stackoverflow.com/questions/tagged/git) - Q&A for Git
- [Git Reddit](https://www.reddit.com/r/git/) - Community discussions
- [Git Wiki](https://git.wiki.kernel.org/index.php/Main_Page) - Community-maintained wiki
- [Git for Windows](https://gitforwindows.org/) - Git for Windows users

### CI/CD Tools

#### Jenkins

##### Official Documentation
- **URL**: [Jenkins Documentation](https://www.jenkins.io/doc/)
- **Description**: The official documentation for Jenkins, an open source automation server that enables developers to build, test, and deploy their software.
- **Content Covered**:
  - Jenkins architecture and concepts
  - Installation and setup
  - Pipeline as code
  - Shared libraries
  - Plugin development
  - Distributed builds
  - Security and administration

##### Key Learning Sections
- [Getting Started](https://www.jenkins.io/doc/book/getting-started/) - Introduction to Jenkins
- [Pipeline](https://www.jenkins.io/doc/book/pipeline/) - Jenkins Pipeline syntax and usage
- [Blue Ocean](https://www.jenkins.io/doc/book/blueocean/) - Modern Jenkins UI
- [Managing Jenkins](https://www.jenkins.io/doc/book/managing/) - Administration and configuration

##### Beginner Tutorials
- [Guided Tour](https://www.jenkins.io/doc/pipeline/tour/getting-started/) - Step-by-step introduction
- [Jenkins Handbook](https://www.jenkins.io/doc/book/) - Comprehensive guide
- [Jenkins Tutorial](https://www.jenkins.io/doc/tutorials/) - Official tutorials
- [Jenkins Pipeline Examples](https://www.jenkins.io/doc/pipeline/examples/) - Example pipelines

##### Advanced Topics
- [Shared Libraries](https://www.jenkins.io/doc/book/pipeline/shared-libraries/) - Reusable pipeline code
- [Extending Jenkins](https://www.jenkins.io/doc/developer/) - Plugin development
- [Distributed Builds](https://www.jenkins.io/doc/book/scaling/) - Scaling Jenkins
- [Security](https://www.jenkins.io/doc/book/security/) - Jenkins security best practices

#### GitHub Actions

##### Official Documentation
- **URL**: [GitHub Actions Documentation](https://docs.github.com/en/actions)
- **Description**: The official documentation for GitHub Actions, a CI/CD platform that allows you to automate your build, test, and deployment pipeline.
- **Content Covered**:
  - Workflows and jobs
  - Events that trigger workflows
  - Runners and execution environments
  - Actions and reusable workflows
  - Secrets and environment variables
  - Caching dependencies
  - Deployment strategies

##### Key Learning Sections
- [Quickstart](https://docs.github.com/en/actions/quickstart) - Getting started with GitHub Actions
- [Learn GitHub Actions](https://docs.github.com/en/actions/learn-github-actions) - Core concepts and tutorials
- [Creating Workflows](https://docs.github.com/en/actions/using-workflows) - Configuring workflow files
- [Using Actions](https://docs.github.com/en/actions/using-actions) - Using pre-built actions

##### Beginner Tutorials
- [First Workflow](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions) - Creating your first workflow
- [GitHub Actions Starter Workflows](https://github.com/actions/starter-workflows) - Template workflows
- [GitHub Learning Lab](https://lab.github.com/) - Interactive GitHub Actions courses
- [GitHub Actions by Example](https://www.actionsbyexample.com/) - Practical examples

##### Advanced Topics
- [Creating Custom Actions](https://docs.github.com/en/actions/creating-actions) - Building your own actions
- [Self-hosted Runners](https://docs.github.com/en/actions/hosting-your-own-runners) - Running workflows on your own infrastructure
- [Security Hardening](https://docs.github.com/en/actions/security-guides) - Securing your workflows
- [Deployment](https://docs.github.com/en/actions/deployment) - Deploying to various environments

#### GitLab CI/CD

##### Official Documentation
- **URL**: [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- **Description**: The official documentation for GitLab CI/CD, a tool built into GitLab for software development through continuous integration and delivery.
- **Content Covered**:
  - Pipeline configuration
  - Jobs and stages
  - Runners and executors
  - Variables and environments
  - Artifacts and caching
  - Docker integration
  - Deployment strategies

##### Key Learning Sections
- [Getting Started](https://docs.gitlab.com/ee/ci/quick_start/) - Introduction to GitLab CI/CD
- [CI/CD Configuration](https://docs.gitlab.com/ee/ci/yaml/) - YAML syntax reference
- [Pipelines](https://docs.gitlab.com/ee/ci/pipelines/) - Pipeline architecture and concepts
- [Jobs](https://docs.gitlab.com/ee/ci/jobs/) - Job configuration and execution

##### Beginner Tutorials
- [GitLab CI/CD Quick Start](https://docs.gitlab.com/ee/ci/quick_start/) - Getting started guide
- [CI/CD Examples](https://docs.gitlab.com/ee/ci/examples/) - Example configurations
- [GitLab CI/CD Templates](https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates) - Ready-to-use templates
- [GitLab CI/CD Workshop](https://gitlab.com/gitlab-org/gitlab-ci-cd-workshop) - Hands-on workshop

##### Advanced Topics
- [CI/CD for Kubernetes](https://docs.gitlab.com/ee/user/clusters/agent/) - Kubernetes integration
- [Multi-project Pipelines](https://docs.gitlab.com/ee/ci/pipelines/multi_project_pipelines.html) - Cross-project dependencies
- [Parent-Child Pipelines](https://docs.gitlab.com/ee/ci/pipelines/parent_child_pipelines.html) - Dynamic pipeline generation
- [Security Scanning](https://docs.gitlab.com/ee/user/application_security/) - Security testing in CI/CD

## Infrastructure Management

### Infrastructure as Code (IaC)

#### Terraform

##### Official Documentation
- **URL**: [Terraform Documentation](https://www.terraform.io/docs)
- **Description**: The official documentation for Terraform, an open-source infrastructure as code software tool that enables you to safely and predictably create, change, and improve infrastructure.
- **Content Covered**:
  - Terraform language
  - Providers and modules
  - State management
  - Resource dependencies
  - Variables and outputs
  - Provisioners
  - Backend configuration
  - Workspaces

##### Key Learning Sections
- [Introduction to Terraform](https://www.terraform.io/intro) - Core concepts and architecture
- [Terraform Language](https://www.terraform.io/language) - HCL syntax and features
- [Terraform CLI](https://www.terraform.io/cli) - Command-line interface reference
- [Terraform Providers](https://registry.terraform.io/browse/providers) - Provider documentation

##### Beginner Tutorials
- [Get Started](https://learn.hashicorp.com/collections/terraform/aws-get-started) - AWS getting started guide
- [Terraform Tutorials](https://learn.hashicorp.com/terraform) - Official HashiCorp tutorials
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - Community best practices
- [Terraform Up & Running](https://www.terraformupandrunning.com/) - Comprehensive book

##### Advanced Topics
- [Remote State](https://www.terraform.io/language/state/remote) - Managing state remotely
- [Modules](https://www.terraform.io/language/modules) - Creating reusable modules
- [Functions](https://www.terraform.io/language/functions) - Built-in functions
- [Testing](https://www.terraform.io/language/modules/testing) - Testing Terraform code

##### Community Resources
- [Terraform Registry](https://registry.terraform.io/) - Modules and providers
- [Stack Overflow - Terraform](https://stackoverflow.com/questions/tagged/terraform) - Q&A for Terraform
- [Terraform Reddit](https://www.reddit.com/r/Terraform/) - Community discussions
- [Terraform GitHub](https://github.com/hashicorp/terraform) - Source code and issues

#### Ansible

##### Official Documentation
- **URL**: [Ansible Documentation](https://docs.ansible.com/)
- **Description**: The official documentation for Ansible, an open-source software provisioning, configuration management, and application-deployment tool.
- **Content Covered**:
  - Ansible concepts
  - Installation and setup
  - Playbooks and roles
  - Inventory management
  - Variables and facts
  - Modules and plugins
  - Error handling
  - Testing and debugging

##### Key Learning Sections
- [Getting Started](https://docs.ansible.com/ansible/latest/getting_started/index.html) - Introduction to Ansible
- [User Guide](https://docs.ansible.com/ansible/latest/user_guide/index.html) - Comprehensive user guide
- [Playbooks](https://docs.ansible.com/ansible/latest/playbook_guide/index.html) - Writing and executing playbooks
- [Module Index](https://docs.ansible.com/ansible/latest/collections/index_module.html) - Available modules

##### Beginner Tutorials
- [Ansible for DevOps](https://www.ansiblefordevops.com/) - Comprehensive book
- [Ansible Quick Start](https://docs.ansible.com/ansible/latest/getting_started/index.html) - Official quick start guide
- [Ansible Examples](https://github.com/ansible/ansible-examples) - Example playbooks
- [Ansible Galaxy](https://galaxy.ansible.com/) - Community roles and collections

##### Advanced Topics
- [Ansible Vault](https://docs.ansible.com/ansible/latest/vault_guide/index.html) - Managing sensitive data
- [Dynamic Inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_dynamic_inventory.html) - Dynamic inventory sources
- [Custom Modules](https://docs.ansible.com/ansible/latest/dev_guide/developing_modules_general.html) - Developing custom modules
- [Ansible Tower/AWX](https://docs.ansible.com/ansible-tower/) - Web-based UI and REST API

##### Community Resources
- [Ansible Galaxy](https://galaxy.ansible.com/) - Community roles and collections
- [Stack Overflow - Ansible](https://stackoverflow.com/questions/tagged/ansible) - Q&A for Ansible
- [Ansible Reddit](https://www.reddit.com/r/ansible/) - Community discussions
- [Ansible GitHub](https://github.com/ansible/ansible) - Source code and issues

### Infrastructure as Code Tutorial

#### Comprehensive IaC Tutorial
- **URL**: [Infrastructure as Code Tutorial](https://github.com/Artemmkin/infrastructure-as-code-tutorial)
- **Description**: A comprehensive tutorial covering various IaC tools including Packer, Terraform, Ansible, Vagrant, Docker, Docker Compose, and Kubernetes.
- **Content Covered**:
  - Introduction to IaC concepts
  - Manual operations vs. automation
  - Image building with Packer
  - Infrastructure provisioning with Terraform
  - Configuration management with Ansible
  - Local development with Vagrant
  - Containerization with Docker
  - Container orchestration with Docker Compose and Kubernetes

##### Key Learning Sections
- [Introduction](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/00-introduction.md) - IaC concepts
- [Packer](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/04-packer.md) - Image building
- [Terraform](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/05-terraform.md) - Infrastructure provisioning
- [Ansible](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/06-ansible.md) - Configuration management
- [Docker](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/08-docker.md) - Containerization

##### Practical Exercises
- [Manual Operations](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/02-manual-operations.md) - Understanding the manual process
- [Scripts](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/03-scripts.md) - Basic automation with scripts
- [Vagrant](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/07-vagrant.md) - Local development environments
- [Docker Compose](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/09-docker-compose.md) - Multi-container applications
- [Kubernetes](https://github.com/Artemmkin/infrastructure-as-code-tutorial/blob/master/docs/10-kubernetes.md) - Container orchestration

## Container Orchestration

### Kubernetes

#### Official Documentation
- **URL**: [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- **Description**: The official documentation for Kubernetes, an open-source system for automating deployment, scaling, and management of containerized applications.
- **Content Covered**:
  - Kubernetes architecture
  - Cluster setup and administration
  - Workloads and scheduling
  - Services, load balancing, and networking
  - Storage
  - Configuration
  - Security
  - Policies
  - Scheduling and eviction

#### Key Learning Sections
- [Concepts](https://kubernetes.io/docs/concepts/) - Core concepts and components
- [Tasks](https://kubernetes.io/docs/tasks/) - Common tasks and how-to guides
- [Tutorials](https://kubernetes.io/docs/tutorials/) - Step-by-step tutorials
- [Reference](https://kubernetes.io/docs/reference/) - API reference and command-line tools

#### Beginner Tutorials
- [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) - Interactive tutorial
- [Hello Minikube](https://kubernetes.io/docs/tutorials/hello-minikube/) - Local Kubernetes setup
- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) - In-depth tutorial
- [Katacoda Kubernetes Playground](https://www.katacoda.com/courses/kubernetes/playground) - Interactive environment

#### Advanced Topics
- [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) - Extending Kubernetes API
- [Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) - Automating application management
- [Service Mesh](https://kubernetes.io/docs/concepts/services-networking/service-mesh/) - Advanced networking
- [Multi-cluster Management](https://kubernetes.io/docs/concepts/cluster-administration/federation/) - Managing multiple clusters

#### Community Resources
- [Kubernetes GitHub](https://github.com/kubernetes/kubernetes) - Source code and issues
- [Kubernetes Slack](https://kubernetes.slack.com/) - Community chat
- [CNCF Kubernetes Forums](https://discuss.kubernetes.io/) - Discussion forums
- [Kubernetes Reddit](https://www.reddit.com/r/kubernetes/) <response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>