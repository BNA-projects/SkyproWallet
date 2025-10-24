import { categorieName } from "../../const";
import { Tag } from "./Categories.styled";

function Categories({ onCategorySelect, selectedCategory }) {
  return (
    <>
      {categorieName.map((item, index) => (
        <Tag
          key={index}
          onClick={() => onCategorySelect(item.value)}
          $isSelected={selectedCategory === item.value}
        >
          <img src={item.srcIcon.default} alt="Иконка категории" /> {item.name}
        </Tag>
      ))}
    </>
  );
}

export default Categories;
