import { SkillProps } from '../types';

export const SkillItem = ({ name }: SkillProps) => {
  return (
    <div className="metric" role="listitem">
      {name}
    </div>
  );
};