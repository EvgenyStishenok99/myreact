import ContainerSection from "../container-section/container-section"
const ContainerMiddle = () => {
  const arrayForSections= [
    {id: 1,
      icon: 'icon-logo-1',
      title: 'SPRING BOOT',
      description: 'Takes an opinionated view of building Spring applications and gets you up and running as quicklyas possible.'  
    },
    {id: 2,
        icon: 'icon-logo-2',
        title: 'SPRING FRAMEWORK',
        description: 'Provides core support for dependency injection, transaction management, web apps, data access,messaging and more.'  
      },
      {id: 3,
        icon: 'icon-logo-3',
        title: 'SPRING CLOUD DATA FLOW',
        description: 'An orchestration service for composable data microservice applications on modern runtimes.'  
      },

      {id: 4,
        icon: 'icon-logo-4',
        title: 'SPRING CLOUD',
        description: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'  
      },
      {id: 5,
        icon: 'icon-logo-5',
        title: 'SPRING DATA',
        description: ' Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.kes an opinionated view of building Spring applications and gets you up and running as quicklyas possible.'  
      },

      {id: 6,
        icon: 'icon-logo-6',
        title: 'SPRING INTEGRATION',
        description: ' Supports the well-known <em>Enterprise Integration Patterns</em> via lightweight messaging and declarative adapters.'  
      },

]
   
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
            {
              arrayForSections.map(item =>{
                return <ContainerSection key={item.id} icon={item.icon} title={item.title} description={item.description}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }

  export default ContainerMiddle;
