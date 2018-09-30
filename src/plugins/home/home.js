/**
 *  Created by daiwenjuan on 2017/11/23 下午8:53.
 */
import React, { PureComponent } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout
import EnhanceConnect from '../../frame/EnhanceConnect'
import { getList } from './home.action'
import key from './key'
import 'react-pivottable/pivottable.css'
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
// Table data as an array of objects
const list = [
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },

  // And so on...
];
import AutoSizer from './test/AutoSizer'
@EnhanceConnect((state) => {
  return {
    users: state[key.ID].users,
  }
}, { getList })
export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      disableHeader: false,
      headerHeight: 30,
      height: 270,
      hideIndexRow: false,
      overscanRowCount: 10,
      rowHeight: 40,
      rowCount: 1000,
      scrollToIndex: undefined,
      useDynamicRowHeight: false,
    };
  }
  _getDatum=(list, index)=> {
    return list[index % list.size];
  }

  _getRowHeight=({index})=> {
    return this._getDatum(list, index).size;
  }


  render() {
    const {
      disableHeader,
      headerHeight,
      height,
      hideIndexRow,
      overscanRowCount,
      rowHeight,
      rowCount,
      scrollToIndex,
      useDynamicRowHeight,
    } = this.state;
    const rowGetter = ({index}) => this._getDatum(list, index);
    return (<div style={{ marginLeft: 50, marginTop: 50 }}>

      <AutoSizer disableHeight>
        {({width}) => (
          <Table
            ref="Table"
            disableHeader={disableHeader}
            headerHeight={headerHeight}
            height={height}
            overscanRowCount={overscanRowCount}
            rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
            rowGetter={rowGetter}
            rowCount={rowCount}
            scrollToIndex={scrollToIndex}
            width={width}>
            {!hideIndexRow && (
              <Column
                label="Index"
                cellDataGetter={({rowData}) => rowData.index}
                dataKey="index"
                width={60}
              />
            )}
            <Column
              dataKey="name"
              width={90}
            />
            <Column
              width={210}
              disableSort
              label="The description label is really long so that it will be truncated"
              dataKey="random"
              cellRenderer={({cellData}) => cellData}
            flexGrow={1}
            />
          </Table>
        )}
      </AutoSizer>

      ,
    </div>)
  }
}