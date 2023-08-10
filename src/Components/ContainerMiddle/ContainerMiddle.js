import { useState } from "react";
import "../ContainerMiddle/ContainerMiddle.css";
import ContainerSection from "../container-section/container-section";

const ContainerMiddle = (props) => {
  return (
    <div className="container-middle">
      <div className="middle">
        <h1>Основные проекты</h1>
        <p>
          От конфигурации до безопасности, от веб-приложений до больших данных -
          какими бы ни были потребности вашего приложения в инфраструктуре, есть{" "}
          <strong>Spring Project</strong>, который поможет вам создать его.
          Начните с малого и используйте то, что вам нужно -{" "}
          <strong>Spring имеет модульную конструкцию</strong>
        </p>
        <div className="section-content">
          {props.searchData.map((item) => {
            return (
              <ContainerSection
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContainerMiddle;
