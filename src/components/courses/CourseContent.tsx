import { memo, useState } from 'react';
import { BsDot } from 'react-icons/bs';

import ChapterDisclosure from '../shared/ChapterDisclosure';

function CourseContent() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="mx-auto w-full lg:w-[70%]">
      <h1 className="text-2xl font-semibold md:text-3xl">Nội dung khoá học</h1>

      <div className="my-4 flex flex-wrap justify-between space-y-2 md:flex-nowrap">
        <div className="flex items-center space-x-4 text-xl md:text-2xl">
          <h3>
            <span className="font-semibold">6</span> chương
          </h3>

          <span className="absolute-center">
            <BsDot />
          </span>

          <h3>
            <span className="font-semibold">44</span> bài học
          </h3>

          <span className="absolute-center">
            <BsDot />
          </span>

          <h3>
            Thời lượng <span className="font-semibold">05 giờ 04 phút</span>
          </h3>
        </div>

        <button
          onClick={() => {
            setExpandAll((prevState) => !prevState);
          }}
          className="smooth-effect rounded-2xl py-4 text-yellow-500 hover:text-yellow-300"
        >
          {expandAll ? 'Thu nhỏ tất cả' : 'Mở rộng tất cả'}
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        <ChapterDisclosure expand={expandAll} />
        <ChapterDisclosure expand={expandAll} />
        <ChapterDisclosure expand={expandAll} />
        <ChapterDisclosure expand={expandAll} />
        <ChapterDisclosure expand={expandAll} />
        <ChapterDisclosure expand={expandAll} />
        <ChapterDisclosure expand={expandAll} />
        <ChapterDisclosure expand={expandAll} />

        {/* <button className="btn-primary btn-lg btn mx-auto w-1/2">
          Xem thêm
        </button> */}
      </div>
    </section>
  );
}

export default memo(CourseContent);