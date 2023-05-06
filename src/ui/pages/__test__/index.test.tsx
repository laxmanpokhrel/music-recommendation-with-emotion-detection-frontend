// export {};
import TestProjectCard from '@Molecules/__tests__/index.test';
import { generateTestSkeleton } from '@Utils/__tests__/index.test';
export default function TestPage() {
  return <div>{generateTestSkeleton(TestProjectCard)}</div>;
}
