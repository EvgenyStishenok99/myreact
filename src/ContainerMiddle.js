const ContainerMiddle = () => {
    return (
      <div className = "container-middle">
        <div className="middle">
          <h1>
            Основные проекты
          </h1>
          <p>От конфигурации до безопасности, от веб-приложений до больших данных - какими бы ни были потребности
            вашего приложения в
            инфраструктуре, есть <strong>Spring Project</strong>, который поможет вам создать его. Начните с малого
            и используйте то,
            что вам нужно - <strong>Spring имеет модульную конструкцию</strong>
          </p>
          <div className="section-content">
            <div className="container-section">
              <div className="container-logo">
                <div id="icon-logo-1"></div>
              </div>
              <div className="project-title">SPRING BOOT</div>
              <p className="project-description">
                Takes an opinionated view of building Spring applications and gets you up and running as quickly
                as possible.
              </p>
            </div>
            <div className="container-section">
              <div className="container-logo">
                <div id="icon-logo-2"></div>
              </div>
              <div className="project-title">SPRING FRAMEWORK</div>
              <p className="project-description">
                Provides core support for dependency injection, transaction management, web apps, data access,
                messaging and more.
              </p>
            </div>
            <div className="container-section">
              <div className="container-logo">
                <div id="icon-logo-3"></div>
              </div>
              <div className="project-title">SPRING CLOUD DATA FLOW</div>
              <p className="project-description">
                An orchestration service for composable data microservice applications on modern runtimes.
              </p>
            </div>
            <div className="container-section">
              <div className="container-logo">
                <div id="icon-logo-4"></div>
              </div>
              <div className="project-title">SPRING CLOUD</div>
              <p className="project-description">
                Provides a set of tools for common patterns in distributed systems. Useful for building and
                deploying microservices.
              </p>
            </div>
            <div className="container-section">
              <div className="container-logo">
                <div id="icon-logo-5"></div>
              </div>
              <div className="project-title">SPRING DATA</div>
              <p class="project-description">
                Provides a set of tools for common patterns in distributed systems. Useful for building and
                deploying microservices.
              </p>
            </div>
            <div className="container-section">
              <div className="container-logo">
                <div id="icon-logo-6"></div>
              </div>
              <div className="project-title">SPRING INTEGRATION</div>
              <p className="project-description">
                Supports the well-known <em>Enterprise Integration Patterns</em> via lightweight messaging and
                declarative adapters.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ContainerMiddle;