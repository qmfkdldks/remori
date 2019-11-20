import React from "react";
import { Wrapper, List, Item, Link } from "./style";

const maxVisiblePageLinks = 5;

export const startEndIndices = (currentNum, lastNum, increment) => {
  if (currentNum < increment || lastNum === increment) {
    return [1, increment];
  }
  if (lastNum - currentNum < increment - 1) {
    return [lastNum - increment, -1];
  }
  return [
    currentNum - Math.ceil(increment / 2),
    currentNum + Math.floor(increment / 2)
  ];
};

const range = (start, end, length = end - start) =>
  Array.from({ length }, (_, i) => start + i);

const Pagination = ({ currentPage, totalSize, perPage, onClick }) => {
  const lastPageNumber = Math.ceil(totalSize / perPage);
  const pageNumbers = range(1, lastPageNumber + 1);

  const pagesBoundary = Math.ceil(maxVisiblePageLinks / 2);
  const maybeHidePages = lastPageNumber - maxVisiblePageLinks >= pagesBoundary;

  const shouldRenderStartChevron = currentPage > 1;
  const shouldRenderEndChevron = currentPage < lastPageNumber;

  const shouldRenderStartDots =
    maybeHidePages && currentPage >= maxVisiblePageLinks;

  const shouldRenderEndDots =
    maybeHidePages && lastPageNumber - currentPage > pagesBoundary;

  const shouldRenderLastPageNumber = lastPageNumber > maxVisiblePageLinks;

  const isActive = page => currentPage === page.toString();

  return (
    <>
      <Wrapper>
        <List>
          {shouldRenderStartChevron && (
            <Item>
              <Link onClick={onClick(currentPage - 1)}>Prev</Link>
            </Item>
          )}
          <Item active={isActive(1)}>
            <Link onClick={onClick(1)}>1</Link>
          </Item>
          {shouldRenderStartDots && <span>...</span>}
          {pageNumbers
            .slice(
              ...startEndIndices(
                currentPage,
                lastPageNumber,
                maxVisiblePageLinks
              )
            )
            .map(num => (
              <Item key={num} active={isActive(num)}>
                <Link onClick={onClick(num)}>{num}</Link>
              </Item>
            ))}
          {shouldRenderEndDots && <span>...</span>}
          {shouldRenderLastPageNumber && (
            <Item active={isActive(lastPageNumber)}>
              <Link onClick={onClick(lastPageNumber)}>{lastPageNumber}</Link>
            </Item>
          )}
          {shouldRenderEndChevron && (
            <Item>
              <Link onClick={onClick(currentPage + 1)}>Next</Link>
            </Item>
          )}
        </List>
      </Wrapper>
    </>
  );
};

export default Pagination;
