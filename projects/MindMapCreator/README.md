# Mind Map Creator

A powerful and interactive mind mapping tool that converts JSON data into visual workflow diagrams. Create, explore, and share hierarchical data structures with an intuitive visual interface.

## Features

- **JSON to Visual Mapping**: Convert JSON files into interactive mind maps
- **Dual Layout Views**: Switch between horizontal tree and radial cluster layouts
- **Interactive Exploration**: Click nodes to expand/collapse branches
- **Text Truncation**: Automatically handles long text with ellipsis and tooltips
- **Search Functionality**: Find nodes with the search bar and halo highlighting
- **Theme Toggle**: Switch between light and dark modes
- **Export Options**: Export diagrams as SVG or PNG files
- **Zoom Controls**: Zoom in/out and reset zoom with dedicated buttons
- **Collapse/Expand All**: Quickly collapse or expand all nodes with one click
- **Hover Tooltips**: See full text content on node hover

## Usage

### Opening the Application

Simply open `index.html` in any modern web browser. No server required!

### Loading Data

1. Click the "Choose File" button
2. Select a JSON file to visualize
3. The mind map will automatically generate

### Navigation

- **Click nodes** to expand/collapse branches
- **Scroll mouse wheel** to zoom in/out
- **Drag to pan** around the diagram
- **Use zoom controls** for precise zooming
- **Search** to highlight specific nodes

### Controls

- **Toggle Mode**: Switch between light and dark themes
- **Switch Layout**: Toggle between horizontal and radial views
- **Collapse All**: Collapse all expanded nodes
- **Expand All**: Expand all collapsed nodes
- **Zoom In/Out**: Adjust zoom level
- **Reset Zoom**: Return to default zoom
- **Export SVG/PNG**: Download the diagram in various formats

## Customization

The application supports various JSON structures:
- Objects with nested properties
- Arrays of items
- Mixed object/array hierarchies

Node colors indicate different types:
- **Green**: Root node
- **Yellow**: Parent nodes (have children)
- **Blue**: Leaf nodes (no children)

## Technical Details

Built with:
- [D3.js](https://d3js.org/) for data visualization
- Pure JavaScript, HTML, and CSS
- Responsive design for different screen sizes

## Contributing

Feel free to fork this repository and submit pull requests for improvements. Issues and suggestions are welcome!

## License

This project is open source and available under the MIT License.