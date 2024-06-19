import React from 'react';


const items = [
  'item 1',
  ['nested item 1.1', 'nested item 1.2'],
  'item 2',
];

function FlattenedList(props) {
  const items = props.items;
  return (
    <ul>
      {/* How can we render a flat list of items here? */}
    </ul>
  );
}

function Exercise10() {
  return (
    <FlattenedList items={items} />
    )
}

export default Exercise10;
