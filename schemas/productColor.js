import React from 'react';
import { FiDisc } from 'react-icons/fi';

const Dot = ({ value }) => {
  // console.log("props", value);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: value.color,
          width: 16,
          height: 16,
          borderRadius: '50%',
          margin: '0.5rem',
        }}
      />
      <h2
        style={{
          fontSize: '1rem',
          fontWeight: 'normal',
        }}
      >
        {value.title}
      </h2>
    </div>
  );
};
export default {
  name: 'productColor',
  title: 'Couleur',
  type: 'document',
  icon: FiDisc,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'ref',
      title: 'Réference',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
  ],
  // preview: {
  //   select: {
  //     title: "title",
  //     color: "ref.hex"
  //   },
  //   component: Dot
  // }
};
