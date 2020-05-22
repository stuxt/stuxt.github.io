/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

registerLayout('bullet', class {
  static get inputProperties() {
    return [ '--padding', '--columns', '--bullet-direction'];
  }
  static get childInputProperties() { 
    return ['margin-left', 'margin-right', 'margin-top', 'margin-bottom', '--bullet-play-mode'];
  }

  // async intrinsicSizes() { /* TODO implement :) */}
  async intrinsicSizes(children, edges, styleMap) {
      const childrenSizes = await Promise.all(children.map((child) => {
          return child.intrinsicSizes();
      }));
      
      const maxContentSize = childrenSizes.reduce((sum, childSizes) => {
          return sum + childSizes.maxContentSize;
      }, 0) + edges.inline;

      const minContentSize = childrenSizes.reduce((max, childSizes) => {
          return sum + childSizes.minContentSize;
      }, 0) + edges.inline;

      return {maxContentSize, minContentSize};
  }
  async layout(children, edges, constraintSpace, styleMap) {
      const childFragments = [];
      let inlineOffset = 0;
      let blockOffset = 0;
      let maxBlockSizeInRow = 0;

      let availableInlineSize = constraintSpace.fixedInlineSize - edges.inline;
      let availableBlockSize = constraintSpace.fixedBlockSize - edges.block;
      let topBlockOffset = 0;
      let bottomBlockOffset = availableBlockSize;
      let isRepeatAttempt = false;
      let isTopLayout = false;
      let playMode = 'scroll';
      // let childModes = []
      console.log("constraintSpace:", constraintSpace, 'edges:', edges)

      // let columnValue = styleMap.get('--bullet-direction');
      // console.log("direction:", columnValue)

      for(let i = 0; i < children.length; i++) {
        let child = children[i];
        // console.log(i, '--', await child.intrinsicSizes(children, edges, styleMap))
        const childRealInlineSize =  await child.intrinsicSizes(children, edges, styleMap)
        // console.log(i, '--', childRealInlineSize.maxContentSize)
        
        const leftMargin = child.styleMap.get('margin-left').value;
        const rightMargin = child.styleMap.get('margin-right').value;
        const topMargin = child.styleMap.get('margin-top').value;
        const bottomMargin = child.styleMap.get('margin-bottom').value;
        playMode = child.styleMap.get('--bullet-play-mode').toString(); // .toString()
        // console.log(playMode, typeof(playMode))

        let childFragment = await child.layoutNextFragment({
          // availableInlineSize
          fixedInlineSize: childRealInlineSize.maxContentSize
        });
        let childInlineSize = childFragment.inlineSize + leftMargin + rightMargin;
        
        if (playMode == 'top') {
            childFragment.inlineOffset = availableInlineSize/2 - childFragment.inlineSize/2;
            childFragment.blockOffset = topBlockOffset + topMargin;
            topBlockOffset += childFragment.blockSize + topMargin + bottomMargin  
        } else if (playMode == 'bottom') {
            childFragment.inlineOffset = availableInlineSize/2 - childFragment.inlineSize/2;
            childFragment.blockOffset = bottomBlockOffset - childFragment.blockSize - bottomMargin;
            bottomBlockOffset -= childFragment.blockSize + topMargin + bottomMargin
        } else {
           if (inlineOffset > availableInlineSize && !isRepeatAttempt) {
                blockOffset += maxBlockSizeInRow;
                maxBlockSizeInRow = 0;
                inlineOffset = 0;
                isRepeatAttempt = true;
                // Restart loop
                i--;
                continue;
            } else if(inlineOffset > availableInlineSize  && isRepeatAttempt) {
              // If the second attempt failed as well, the child is wider than the
              // there’s room. In that case, force it to be laid out at max width.
              childFragment = await child.layoutNextFragment({
                fixedInlineSize: childRealInlineSize.maxContentSize
              });
            }
            isRepeatAttempt = false;
            childFragment.inlineOffset = inlineOffset + leftMargin;
            childFragment.blockOffset = blockOffset + topMargin;
            inlineOffset += childInlineSize;
            maxBlockSizeInRow = Math.max(maxBlockSizeInRow, childFragment.blockSize + topMargin + bottomMargin);
        }

        childFragments.push(childFragment);
        
      }
      // console.log(childFragments)
      return {
        childFragments,
        autoBlockSize: availableBlockSize // blockOffset + maxBlockSizeInRow
      };
    }



  //  async layout(children, edges, constraints, styleMap) {
  //   const inlineSize = constraints.fixedInlineSize;

  //   const padding = parseInt(styleMap.get('--padding').toString());
  //   const columnValue = styleMap.get('--columns').toString();

  //   // We also accept 'auto', which will select the BEST number of columns.
  //   let columns = parseInt(columnValue);
  //   if (columnValue == 'auto' || !columns) {
  //     columns = Math.ceil(inlineSize / 350); // MAGIC NUMBER \o/.
  //   }

  //   // Layout all children with simply their column size.
  //   const childInlineSize = (inlineSize - ((columns + 1) * padding)) / columns;
  //   const childFragments = await Promise.all(children.map((child) => {
  //     return child.layoutNextFragment({fixedInlineSize: childInlineSize});
  //   }));

  //   let autoBlockSize = 0;
  //   const columnOffsets = Array(columns).fill(0);
  //   for (let childFragment of childFragments) {
  //     // Select the column with the least amount of stuff in it.
  //     const min = columnOffsets.reduce((acc, val, idx) => {
  //       if (!acc || val < acc.val) {
  //         return {idx, val};
  //       }

  //       return acc;
  //     }, {val: +Infinity, idx: -1});

  //     childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
  //     childFragment.blockOffset = padding + min.val;

  //     columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
  //     autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
  //   }

  //   return {autoBlockSize, childFragments};
  // }
});
