import matplotlib.pyplot as plt
from svgpathtools import svg2paths
import numpy as np

def plot_svg(svg_file):
    # Load SVG file and extract paths
    global paths,attributes
    paths, attributes = svg2paths(svg_file)

    fig, ax = plt.subplots()
    all_xy = []
    
    # Iterate over each path in the SVG file
    for path in paths:
        for spath in path.continuous_subpaths():
            x = []
            y = []
            xy = []
            for i in np.linspace(0,1,int(path.length()/20)):
                p = spath.point(i)
                x.append(p.real)
                y.append(p.imag)
                xy.append([int(p.real),int(p.imag)])
            all_xy.append(xy)
            ax.plot(x, y, 'b-')

    # Set the aspect ratio of the plot to equal
    ax.set_aspect('equal')

    # Show the plot
    #plt.show()
    
    return all_xy

# Example usage
svg_file = 'test.svg'
all_xy = plot_svg(svg_file)
with open('xy.txt','w') as fout:
    fout.write(str(all_xy))