const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isContactType) return type;
};

const checkIsFavourite = (favourite) => {
  if (favourite === 'true') {
    return true;
  }
  if (favourite === 'false') {
    return false;
  }

  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const checkedIsFavourite = checkIsFavourite(isFavourite);

  return {
    type: parsedContactType,
    isFavourite: checkedIsFavourite,
  };
};
