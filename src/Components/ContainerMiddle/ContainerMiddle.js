import { useState } from "react";
import "../ContainerMiddle/ContainerMiddle.css";
import ContainerSection from "../containerSection/containerSection";
import { useSelector, useDispatch } from "react-redux";
import { removeItemAC } from "../../store/technologiesReducer";
const ContainerMiddle = (props) => {
  const technologies = useSelector((state) => state.technologiesReducer);
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeItemAC(id));
  };

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
          {technologies.map((item) => {
            return (
              <ContainerSection
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                callBack={removeItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContainerMiddle;
