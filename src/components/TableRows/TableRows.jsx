import * as S from "./TableRows.styled";

export const TableFirstRow = () => (
  <S.RowHeader>
    <S.Cell>Описание</S.Cell>
    <S.Cell>Категория</S.Cell>
    <S.Cell>Дата</S.Cell>
    <S.Cell>Сумма</S.Cell>
  </S.RowHeader>
);

export const TableRow = ({
  description,
  category,
  date,
  amount,
  onEdit,
  onDelete,
  isSelected,
}) => (
  <S.Row $isSelected={isSelected}>
    <S.Cell>{description}</S.Cell>
    <S.Cell>{category}</S.Cell>
    <S.Cell>{date}</S.Cell>
    <S.Cell>{amount}</S.Cell>
    <S.Icons>
      <S.IconButton $isSelected={isSelected} onClick={onEdit}>
        <img src="/first-box/mini-pen.svg" alt="Иконка карандаша" />
      </S.IconButton>
      <S.IconButton $isSelected={isSelected} onClick={onDelete}>
        <img src="/first-box/mini-bucket.svg" alt="Иконка корзинки" />
      </S.IconButton>
    </S.Icons>
  </S.Row>
);
