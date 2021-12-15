import * as React from "react"
import { VFC, memo } from "react"
import { Box } from "@chakra-ui/react"

const Ipad: VFC = memo(() => (
  <Box
    as="svg"
    w="100%"
    h="100%"
    viewBox="0 0 500 500"
    fillRule="evenodd"
    className="item"
  >
    <g>
      <path
        d="M330.149,19.81l-283.856,-0.184c-2.44,0.229 -5,0.469 -7.172,1.537c-5.441,2.674 -7.242,8.024 -7.29,13.527c-1.18,137.134 -0.674,286.105 -0.731,423.244c-0.119,1.666 3.44,21.62 24.036,21.337c91.129,-1.252 182.966,-0.468 274.103,-0.816c8.428,-0.032 13.153,-4.525 16.402,-11.678c1.145,-2.52 1.382,-5.331 1.856,-8.036c0.21,-1.203 0.201,-2.434 0.19,-3.654c0.125,-139.479 0.251,-278.958 0.007,-418.437c-0.011,-6.754 -2.041,-12.207 -8.761,-15.639c-1.813,-0.925 -3.996,-0.997 -6.038,-1.277c-0.905,-0.123 -1.835,-0.022 -2.746,0.076Zm-141.32,431.744c5.402,-0 9.787,4.369 9.787,9.751c0,5.382 -4.385,9.751 -9.787,9.751c-5.402,0 -9.788,-4.369 -9.788,-9.751c0,-5.382 4.386,-9.751 9.788,-9.751Zm141.858,-411.457l-281.21,0l-0,406.129l281.21,0l-0,-406.129Z"
        fill=" #6a6a6a"
      />
    </g>
    <g>
      <path
        d="M455.483,77.368l1.678,-2.426c0.614,-0.901 1.175,-1.725 1.68,-2.464l16.772,11.516l1.603,-2.535l-1.603,2.535c-0.492,0.752 -1.037,1.583 -1.637,2.495l-16.815,-11.547l-1.678,2.426Zm18.493,9.121c0,-0 -137.742,208.162 -158.322,235.663c-6.263,8.37 -19.376,13.425 -21.158,12.115c-2.256,-1.656 -2.042,-16.659 3.758,-25.271c6.99,-10.381 157.229,-231.628 157.229,-231.628l16.792,11.691l1.701,-2.57Zm-15.135,-14.011c-0,0 2.887,-4.223 3.104,-4.532c5.765,-8.171 21.841,3.359 17.134,10.718c-0.32,0.5 -1.726,2.585 -1.863,2.795l-16.829,-11.245l-1.546,2.264Z"
        fill=" #bababa"
      />
    </g>
    <g>
      <path
        d="M221.984,352.454c-0.786,-0.741 -1.79,-1.651 -2.821,-2.495c-3.84,-3.144 -9.586,-6.42 -16.612,-4.967c-0.901,0.186 -1.481,1.069 -1.295,1.969c0.187,0.901 1.069,1.481 1.97,1.295c5.865,-1.213 10.62,1.658 13.826,4.282c2.439,1.998 4.101,3.886 4.781,4.294c0.716,0.429 1.313,0.342 1.686,0.204c0.487,-0.18 0.935,-0.533 1.117,-1.266c5.365,-21.519 0.976,-41.15 -3.391,-51.619c-1.364,-3.269 -2.743,-5.671 -3.831,-7.019c-0.637,-0.79 -1.238,-1.276 -1.707,-1.51c-0.92,-0.459 -2.163,-0.407 -3.493,-0.049c-0.642,0.173 -1.315,0.403 -1.959,0.55c-0.359,0.082 -0.698,0.173 -0.988,0.086c-3.616,-1.074 -6.305,-4.512 -8.512,-8.61c-3.62,-6.724 -5.822,-15.295 -7.62,-20.07c-0.874,-2.323 -4.49,-8.417 -7.421,-13.754c-1.818,-3.309 -3.388,-6.289 -3.679,-7.735c-0.521,-2.598 -3.928,-12.577 -4.417,-15.016c-1.337,-6.658 -0.592,-13.198 0.606,-19.791c1.245,-6.854 2.981,-13.765 3.578,-20.908c0.295,-3.524 0.765,-7.599 0.265,-11.165c-0.568,-4.047 -2.333,-7.466 -6.495,-9.159c-3.462,-1.408 -6.622,-0.113 -9.338,1.047c-7.228,3.086 -18.437,11.126 -21.59,30.999c-0.145,0.908 0.476,1.763 1.384,1.907c0.909,0.144 1.764,-0.476 1.908,-1.385c2.884,-18.178 12.995,-25.632 19.607,-28.455c1.98,-0.846 4.249,-2.052 6.773,-1.025c2.931,1.192 4.05,3.685 4.45,6.534c0.467,3.33 -0.01,7.133 -0.285,10.424c-0.589,7.035 -2.31,13.839 -3.537,20.59c-1.274,7.01 -2.015,13.964 -0.594,21.043c0.489,2.439 3.896,12.418 4.417,15.016c0.325,1.615 1.994,4.986 4.025,8.684c2.843,5.175 6.376,11.07 7.224,13.323c1.834,4.874 4.109,13.613 7.804,20.476c2.671,4.96 6.121,8.925 10.498,10.226c1.156,0.343 2.673,0 4.132,-0.433c0.4,-0.118 0.793,-0.235 1.166,-0.308c0.23,-0.045 0.438,-0.141 0.604,-0.059c0.281,0.14 0.582,0.562 0.988,1.138c0.886,1.258 1.919,3.196 2.961,5.692c4.02,9.636 8.039,27.363 3.815,47.019Z"
        fill=" #c07777"
      />
      <path
        d="M144.64,202.071c-1.17,8.16 2.887,37.421 2.887,37.421c0.128,0.911 0.971,1.547 1.882,1.42c0.911,-0.128 1.547,-0.971 1.419,-1.882c0,0 -4.03,-28.529 -2.889,-36.486c0.131,-0.91 -0.502,-1.755 -1.413,-1.886c-0.91,-0.131 -1.756,0.503 -1.886,1.413Z"
        fill=" #c07777"
      />
      <path
        d="M148.011,249.662c0.13,0.033 0.266,0.05 0.407,0.05c0.92,-0 1.666,-0.747 1.666,-1.667c0,-0.418 -0.13,-0.843 -0.521,-1.215c-0.104,-0.1 -0.605,-0.493 -1.58,-0.504c-2.575,-0.028 -15.815,0.945 -22.915,-2.108c-0.91,-0.391 -4.243,-0.648 -8.895,-0.495c-10.138,0.334 -26.953,2.255 -37.24,6.544c-10.366,4.321 -10.384,15.805 -10.116,19.272c0.174,2.258 0.787,4.203 1.699,6.247c3.362,7.537 8.203,10.098 13.911,11.698c5.153,1.445 11.087,2.004 17.208,5.392c5.667,3.137 14.179,8.94 20.569,10.718c3.311,0.921 6.138,0.747 8.044,-0.777c3.685,-2.944 4.713,-7.15 4.22,-11.571c-0.678,-6.079 -4.313,-12.556 -6.974,-15.999c-2.026,-2.621 -6.208,-5.451 -11.222,-7.848c-7.327,-3.503 -16.413,-6.127 -22.665,-6.127c-0.92,-0 -1.667,0.746 -1.667,1.666c-0,0.92 0.747,1.667 1.667,1.667c5.86,-0 14.36,2.518 21.228,5.801c4.45,2.128 8.223,4.552 10.021,6.879c2.387,3.088 5.692,8.878 6.299,14.33c0.364,3.267 -0.264,6.422 -2.987,8.598c-0.725,0.579 -1.704,0.695 -2.825,0.6c-1.454,-0.122 -3.109,-0.627 -4.87,-1.343c-5.75,-2.335 -12.495,-6.893 -17.224,-9.511c-6.382,-3.532 -12.549,-4.178 -17.922,-5.685c-4.819,-1.35 -8.929,-3.484 -11.767,-9.846c-0.752,-1.685 -1.276,-3.283 -1.42,-5.145c-0.219,-2.847 -0.434,-12.392 8.075,-15.939c9.961,-4.153 26.251,-5.966 36.068,-6.289c2.494,-0.083 4.565,-0.068 5.998,0.034c0.716,0.051 1.227,0.087 1.47,0.192c7.501,3.225 21.474,2.348 24.195,2.379l0.065,0.002Zm-0.828,-0.498c-0.268,-0.295 -0.432,-0.688 -0.432,-1.119c0,0.376 0.1,0.773 0.432,1.119Z"
        fill=" #c07777"
      />
      <path
        d="M147.561,239.667c0.447,1.781 -0.091,5.795 -0.587,7.443c-1.083,3.598 -3.733,6.686 -6.072,9.87c-2.668,3.633 -4.944,7.382 -4.944,11.814c0,0.919 0.747,1.666 1.667,1.666c0.92,0 1.667,-0.747 1.667,-1.666c-0,-3.716 2.06,-6.795 4.297,-9.841c2.566,-3.494 5.388,-6.934 6.577,-10.882c0.614,-2.038 1.181,-7.012 0.628,-9.215c-0.224,-0.893 -1.13,-1.435 -2.022,-1.211c-0.892,0.224 -1.435,1.13 -1.211,2.022Z"
        fill=" #c07777"
      />
      <path
        d="M133.237,319.198c-1.093,1.591 -3.236,5.085 -4.195,7.99c-0.506,1.533 -0.664,2.942 -0.411,3.971c0.22,0.893 1.124,1.439 2.017,1.219c0.893,-0.22 1.44,-1.124 1.219,-2.017c-0.198,-0.804 0.232,-1.972 0.75,-3.219c0.97,-2.338 2.522,-4.826 3.368,-6.057c0.52,-0.758 0.327,-1.796 -0.431,-2.317c-0.758,-0.521 -1.796,-0.328 -2.317,0.43Z"
        fill=" #c07777"
      />
      <path
        d="M129.969,303.316c0.496,-0.268 0.844,-0.781 0.874,-1.384c0.045,-0.919 -0.663,-1.702 -1.582,-1.748c-0.822,-0.04 -1.439,0.291 -1.901,0.877c-0.412,0.522 -0.623,1.488 -0.798,2.151c-0.26,0.992 -0.936,2.47 -1.294,3.866c-0.333,1.301 -0.381,2.552 -0.012,3.516c0.328,0.859 1.293,1.29 2.152,0.961c0.859,-0.329 1.29,-1.293 0.961,-2.152c-0.218,-0.57 0.061,-1.336 0.305,-2.111c0.377,-1.198 0.89,-2.388 1.112,-3.232c0.047,-0.178 0.126,-0.507 0.183,-0.744Z"
        fill=" #c07777"
      />
      <path
        d="M137.931,343.608c-0.676,0.448 -1.518,1.543 -2.188,2.886c-0.924,1.853 -1.542,4.139 -1.425,5.238c0.098,0.915 0.919,1.579 1.834,1.481c0.915,-0.097 1.578,-0.919 1.481,-1.834c-0.077,-0.722 0.485,-2.179 1.093,-3.397c0.352,-0.706 0.688,-1.358 1.044,-1.593c0.767,-0.508 0.978,-1.542 0.471,-2.31c-0.508,-0.767 -1.542,-0.978 -2.31,-0.471Z"
        fill=" #c07777"
      />
      <path
        d="M204.368,331.897c-0.067,0.615 -0.278,2.54 -0.301,2.762c-0.416,4.143 -1.468,7.742 -2.752,11.415c-0.303,0.868 0.155,1.819 1.023,2.123c0.869,0.304 1.82,-0.155 2.124,-1.023c1.37,-3.918 2.478,-7.762 2.922,-12.182c0.028,-0.28 0.346,-2.15 0.343,-3.175c-0.002,-0.559 -0.113,-0.993 -0.227,-1.239c-0.37,-0.793 -0.99,-1.054 -1.622,-1.054c-0.92,-0 -1.667,0.746 -1.667,1.666c0,0.253 0.056,0.492 0.157,0.707Zm1.015,0.885c0.157,0.051 0.322,0.075 0.495,0.075c-0.172,-0 -0.338,-0.026 -0.495,-0.075Zm-0.043,-0.014l0.039,0.013l-0.049,-0.017l0.01,0.004Z"
        fill=" #c07777"
      />
      <path
        d="M209.73,348.302c1.166,-1.016 1.853,-2.325 2.233,-3.704c0.488,-1.769 0.446,-3.648 0.446,-4.927c-0,-0.919 -0.747,-1.666 -1.667,-1.666c-0.92,-0 -1.667,0.747 -1.667,1.666c0,0.892 0.047,2.134 -0.177,3.379c-0.178,0.995 -0.525,2.013 -1.357,2.738c-0.694,0.604 -0.767,1.658 -0.163,2.352c0.605,0.693 1.658,0.766 2.352,0.162Z"
        fill=" #c07777"
      />
      <path
        d="M92.377,289.601l0.034,-0.016c0.816,-0.426 1.132,-1.434 0.706,-2.249c-0.295,-0.566 -0.771,-0.893 -1.46,-0.913c-0.239,-0.007 -0.709,0.029 -1.233,0.436c-0.535,0.416 -1.967,2.099 -3.184,4.274c-1.223,2.186 -2.21,4.855 -2.053,7.131c0.164,2.358 1.265,4.496 2.856,6.334c2.172,2.51 5.261,4.454 7.679,5.658c5.576,2.778 12.672,4.226 18.928,6.304c4.682,1.555 8.891,4.011 13.713,4.972c3.201,0.637 6.669,0.142 10.089,-0.737c3.167,-0.814 6.292,-1.95 9.09,-2.646c4.14,-1.032 8.868,-1.391 12.635,-3.535c8.432,-4.8 9.365,-15.882 1.181,-21.706c-3.114,-2.217 -7.069,-3.112 -11.286,-3.331c-5.855,-0.306 -12.228,0.692 -17.226,0.692c-0.92,-0 -1.666,0.747 -1.666,1.666c-0,0.92 0.746,1.667 1.666,1.667c4.15,0 9.25,-0.693 14.211,-0.748c4.582,-0.052 9.052,0.41 12.368,2.77c6.069,4.318 5.355,12.534 -0.897,16.093c-3.508,1.997 -7.936,2.237 -11.792,3.197c-2.805,0.699 -5.939,1.837 -9.113,2.653c-2.921,0.75 -5.876,1.24 -8.609,0.696c-4.686,-0.934 -8.763,-3.356 -13.313,-4.867c-6.109,-2.028 -13.048,-3.411 -18.493,-6.124c-2.086,-1.039 -4.77,-2.69 -6.645,-4.856c-1.107,-1.28 -1.937,-2.74 -2.05,-4.382c-0.117,-1.694 0.726,-3.647 1.636,-5.273c0.774,-1.384 1.898,-2.765 2.228,-3.16Zm-2.172,-0.645c0.214,0.372 0.517,0.626 0.922,0.736c-0.376,-0.121 -0.708,-0.374 -0.922,-0.736Z"
        fill=" #c07777"
      />
      <path
        d="M97.728,309.504c-3.504,-0.414 -5.521,1.938 -6.254,5.438c-0.899,4.291 0.306,10.291 1.818,12.399c1.344,1.875 3.431,3.145 5.802,4.095c3.048,1.222 6.586,1.904 9.101,3.157c3.657,1.821 6.466,4.742 9.413,7.298c3.306,2.868 6.776,5.298 11.417,5.812c4.246,0.47 8.14,-0.973 12.264,-1.289c4.43,-0.34 9.604,-0.289 14.58,-0.925c5.278,-0.676 10.326,-2.133 14.181,-5.425c5.454,-4.658 4.297,-11.464 -0.166,-15.911c-4.741,-4.723 -14.524,-8.771 -21.186,-8.771c-0.92,0 -1.667,0.747 -1.667,1.667c0,0.92 0.747,1.667 1.667,1.667c5.922,-0 14.619,3.6 18.833,7.799c3.091,3.079 4.132,7.789 0.354,11.015c-3.371,2.879 -7.822,4.061 -12.439,4.652c-4.918,0.629 -10.033,0.573 -14.411,0.908c-3.919,0.3 -7.609,1.746 -11.644,1.3c-3.923,-0.435 -6.804,-2.592 -9.599,-5.017c-3.154,-2.736 -6.197,-5.814 -10.11,-7.764c-2.185,-1.088 -5.102,-1.784 -7.852,-2.718c-2.329,-0.791 -4.559,-1.72 -5.829,-3.492c-0.99,-1.381 -1.669,-4.913 -1.49,-7.998c0.069,-1.181 0.265,-2.301 0.67,-3.194c0.408,-0.901 1.07,-1.521 2.157,-1.393c0.913,0.108 1.742,-0.546 1.85,-1.459c0.108,-0.914 -0.546,-1.743 -1.46,-1.851Z"
        fill=" #c07777"
      />
      <path
        d="M105.898,331.668c-4.457,0.6 -7.184,2.788 -8.48,5.605c-1.866,4.057 -0.691,9.691 3.241,14.262c1.547,1.798 3.714,3.01 6.014,4.016c2.016,0.881 4.132,1.603 5.876,2.569c2.58,1.428 4.663,3.148 6.882,4.635c2.444,1.637 5.04,3.008 8.465,3.577c8.942,1.484 23.153,-3.821 30.156,-9.403c2.292,-1.826 4.549,-6.821 4.349,-10.541c-0.098,-1.815 -0.753,-3.339 -1.971,-4.299c-0.83,-0.653 -1.941,-1.075 -3.416,-1.075c-0.92,-0 -1.667,0.747 -1.667,1.667c-0,0.919 0.747,1.666 1.667,1.666c0.577,0 1.029,0.106 1.354,0.361c0.512,0.404 0.663,1.096 0.704,1.86c0.147,2.724 -1.419,6.417 -3.097,7.754c-6.403,5.104 -19.358,10.079 -27.533,8.721c-2.9,-0.481 -5.086,-1.671 -7.155,-3.058c-2.295,-1.537 -4.456,-3.305 -7.124,-4.782c-1.828,-1.012 -4.041,-1.782 -6.154,-2.707c-1.83,-0.799 -3.593,-1.705 -4.823,-3.135c-2.968,-3.45 -4.148,-7.633 -2.74,-10.695c0.888,-1.928 2.846,-3.284 5.897,-3.695c0.912,-0.122 1.552,-0.962 1.43,-1.874c-0.123,-0.911 -0.963,-1.552 -1.875,-1.429Z"
        fill=" #c07777"
      />
      <path
        d="M151.58,358.281c-0.086,-0.033 -0.175,-0.059 -0.268,-0.077c-1.378,-0.275 -1.828,0.89 -1.889,1.052c-0.09,0.242 -0.46,1.369 0.756,2.041c0.016,0.009 0.211,0.106 0.585,0.224c1.83,0.575 11.957,3.425 20.993,1.304c6.437,-1.511 12.133,-5.095 17.638,-8.752c3.76,-2.497 8.779,-5.295 13.662,-5.791c0.915,-0.093 1.583,-0.912 1.49,-1.827c-0.093,-0.915 -0.912,-1.582 -1.827,-1.489c-5.409,0.55 -11.004,3.564 -15.169,6.331c-5.176,3.437 -10.504,6.862 -16.556,8.283c-8.279,1.943 -17.555,-0.713 -19.232,-1.239l-0.183,-0.06Zm0.866,2.362c-0.328,0.594 -0.999,0.946 -1.697,0.845c1.017,0.163 1.503,-0.478 1.697,-0.845Zm0.025,-0.048l-0.011,0.021l0.008,-0.014l0.003,-0.007Zm0.121,-0.314l-0.003,0.013l0.003,-0.013Zm-0.711,-1.849c0.925,0.565 0.83,1.409 0.722,1.809l0.018,-0.077c0.138,-0.694 -0.177,-1.373 -0.74,-1.732Z"
        fill=" #c07777"
      />
      <path
        d="M108.571,292.306c-0.182,-1.846 0.131,-3.081 0.975,-3.783c0.875,-0.728 2.167,-0.853 3.567,-0.729c3.402,0.303 7.432,2.264 9.462,4.287c2.339,2.33 4.682,4.39 4.707,7.892c0.006,0.92 0.758,1.662 1.678,1.655c0.92,-0.006 1.661,-0.758 1.655,-1.678c-0.031,-4.461 -2.708,-7.263 -5.688,-10.231c-2.473,-2.464 -7.373,-4.876 -11.518,-5.245c-2.375,-0.211 -4.511,0.252 -5.995,1.487c-1.515,1.261 -2.488,3.359 -2.16,6.672c0.09,0.916 0.907,1.586 1.822,1.495c0.916,-0.09 1.586,-0.907 1.495,-1.822Z"
        fill=" #c07777"
      />
      <path
        d="M148.253,315.636c-0.022,-0.498 -0.065,-1.805 -0.003,-2.95c0.127,-2.344 0.4,-5.128 0.795,-5.935c0.236,-0.483 0.719,-0.808 1.303,-1.067c0.82,-0.364 1.834,-0.564 2.93,-0.637c3.463,-0.233 7.762,0.76 9.835,2.827c0.652,0.649 1.708,0.647 2.358,-0.005c0.649,-0.651 0.647,-1.707 -0.005,-2.357c-2.63,-2.62 -8.02,-4.087 -12.411,-3.791c-3.316,0.223 -6.003,1.516 -7.005,3.565c-0.481,0.986 -0.974,4.36 -1.128,7.22c-0.11,2.022 -0.024,3.795 0.182,4.405c0.243,0.72 0.706,1.039 1.039,1.183c0.398,0.172 0.819,0.201 1.265,0.049c0.87,-0.297 1.336,-1.246 1.038,-2.116c-0.048,-0.141 -0.114,-0.272 -0.193,-0.391Zm-1.842,-0.673c-0.027,0.008 -0.054,0.016 -0.081,0.026l0.081,-0.026Zm0.069,-0.018l-0.062,0.017l0.076,-0.02l-0.014,0.003Zm0.073,-0.016l-0.059,0.013l0.082,-0.017l-0.023,0.004Zm0.074,-0.013l-0.05,0.009l0.076,-0.012l-0.026,0.003Zm0.072,-0.009l-0.029,0.004l0.049,-0.005l-0.02,0.001Z"
        fill=" #c07777"
      />
      <path
        d="M235.159,288.846c-0.298,-0.172 -0.682,-0.403 -0.938,-0.59c-0.699,-0.507 -1.309,-0.996 -1.511,-1.117c-4.298,-2.569 -9.699,-5.354 -13.625,-7.31c-1.653,-0.824 -3.043,-0.859 -4.206,-0.45c-1.595,0.561 -2.865,2.101 -3.735,4.273c-1.651,4.12 -1.985,10.749 -3.013,13.32c-0.341,0.855 0.075,1.825 0.929,2.167c0.855,0.341 1.825,-0.075 2.166,-0.93c0.872,-2.18 1.276,-7.223 2.351,-11.271c0.367,-1.384 0.807,-2.64 1.429,-3.539c0.295,-0.427 0.613,-0.772 1.039,-0.895c0.44,-0.126 0.943,0.004 1.554,0.308c3.861,1.924 9.173,4.661 13.4,7.188c0.414,0.247 2.511,1.967 3.686,2.303c0.993,0.283 1.758,0.002 2.244,-0.481c1.424,-1.419 2.362,-2.851 3.321,-4.198c1.19,-1.67 2.419,-3.193 5.181,-4.225c6.762,-2.526 14.72,-1.109 21.24,1.057c0.601,0.199 2.301,0.777 3.736,1.417c0.572,0.254 1.27,0.661 1.513,0.805c0.263,0.572 0.842,0.969 1.513,0.969c0.92,0 1.667,-0.746 1.667,-1.666c-0,-0.544 -0.307,-1.352 -1.232,-2.017c-1.445,-1.038 -5.144,-2.339 -6.147,-2.672c-7.198,-2.391 -15.991,-3.804 -23.456,-1.015c-3.005,1.122 -4.635,2.671 -5.993,4.418c-1.008,1.296 -1.832,2.727 -3.113,4.151Z"
        fill=" #c07777"
      />
      <path
        d="M227.935,373.977c-0.653,0.144 -1.173,0.122 -1.593,-0.092c-0.473,-0.241 -0.799,-0.682 -1.088,-1.186c-0.883,-1.539 -1.333,-3.637 -1.987,-5.267c-2.821,-7.026 -7.383,-17.37 -13.679,-21.755c-0.755,-0.525 -1.795,-0.339 -2.32,0.416c-0.526,0.754 -0.34,1.794 0.415,2.32c5.831,4.061 9.878,13.754 12.49,20.261c0.708,1.763 1.234,4.017 2.189,5.683c0.63,1.099 1.436,1.973 2.468,2.498c1.055,0.537 2.365,0.743 4.049,0.324c0.387,-0.097 1.315,-0.649 2.495,-1.652c3.508,-2.982 10.754,-10.222 13.952,-12.611c0.925,-0.691 2.105,-0.648 3.291,-0.526c1.666,0.171 3.363,0.58 4.785,0.598c7.74,0.1 10.89,-2.352 13.372,-4.262c1.193,-0.919 2.126,-1.768 3.723,-1.694c0.919,0.042 1.7,-0.669 1.742,-1.588c0.043,-0.919 -0.669,-1.699 -1.587,-1.742c-2.489,-0.115 -4.053,0.952 -5.912,2.382c-2.094,1.613 -4.762,3.655 -11.295,3.571c-1.646,-0.021 -3.673,-0.601 -5.573,-0.655c-1.658,-0.047 -3.228,0.264 -4.542,1.246c-2.839,2.121 -8.831,8.002 -12.669,11.467c-1.181,1.067 -2.497,2.088 -2.726,2.264Z"
        fill=" #c07777"
      />
      <ellipse
        cx="241.556"
        cy="348.778"
        rx="6.169"
        ry="6.146"
        fill=" #c07777"
        stroke=" #c07777"
        strokeWidth=" 0.67px"
      />
      <path
        d="M132.778,226.163c-2.466,-5.515 -2.818,-13.816 -1.273,-21.044c1.007,-4.709 2.812,-8.975 5.469,-11.638c0.649,-0.651 0.648,-1.707 -0.003,-2.357c-0.651,-0.65 -1.707,-0.649 -2.357,0.002c-3.046,3.053 -5.214,7.897 -6.368,13.296c-1.697,7.936 -1.218,17.046 1.489,23.101c0.376,0.84 1.362,1.217 2.202,0.842c0.84,-0.376 1.217,-1.363 0.841,-2.202Z"
        fill=" #c07777"
      />
      <path
        d="M117.986,222.809c-17.111,-31.371 -11.588,-65.889 -1.915,-85.164c0.413,-0.822 0.08,-1.824 -0.742,-2.237c-0.822,-0.412 -1.825,-0.08 -2.237,0.742c-10.024,19.974 -15.764,55.746 1.967,88.255c0.441,0.808 1.454,1.106 2.262,0.666c0.807,-0.441 1.105,-1.454 0.665,-2.262Z"
        fill=" #c07777"
      />
      <path
        d="M89.852,119.862c0.633,1.204 2.117,2.146 5.225,1.807c4.898,-0.533 15.315,-4.196 35.687,-12.63c14.477,-5.994 22.935,-9.602 26.91,-12.419c2.012,-1.426 3.013,-2.782 3.327,-4.031c0.262,-1.043 0.123,-2.079 -0.447,-3.147c-0.508,-0.954 -1.351,-1.732 -2.523,-2.295c-1.392,-0.67 -3.319,-1.044 -5.642,-1.108c-8.113,-0.224 -21.529,3.266 -32.255,7.724c-13.027,5.415 -24.162,12.254 -28.585,17.941c-2.353,3.026 -2.904,5.865 -1.697,8.158Zm2.928,-1.595c-0.379,-0.759 -0.245,-1.619 0.175,-2.553c0.595,-1.325 1.741,-2.734 3.296,-4.213c5.118,-4.869 14.499,-10.227 25.163,-14.66c10.275,-4.271 23.111,-7.684 30.883,-7.47c1.498,0.041 2.788,0.215 3.799,0.577c0.698,0.249 1.248,0.558 1.517,1.062c0.285,0.534 0.146,1.022 -0.327,1.567c-0.37,0.425 -0.883,0.858 -1.54,1.324c-3.875,2.746 -12.143,6.214 -26.257,12.058c-17.104,7.081 -27.029,10.77 -32.538,12.005c-1.618,0.363 -2.8,0.512 -3.642,0.428c-0.199,-0.019 -0.459,-0.102 -0.529,-0.125Z"
        fill=" #c07777"
      />
      <path
        d="M97.65,127.737c-1.15,-1.526 -4.32,-8.108 -4.667,-8.83c-0.01,-0.101 -0.03,-0.202 -0.061,-0.303c-0.266,-0.88 -1.196,-1.379 -2.077,-1.114c-0.332,0.101 -0.618,0.289 -0.844,0.581c-0.126,0.163 -0.554,0.825 -0.201,1.853c0.467,1.364 3.241,6.87 4.744,9.179c0.646,0.992 1.304,1.508 1.578,1.617c7.307,2.912 14.81,0.667 22.172,-0.709c5.183,-0.968 31.233,-12.219 35.649,-15.942c1.834,-1.546 4.674,-3.642 6.817,-6.015c1.623,-1.798 2.84,-3.769 3.175,-5.769c0.189,-1.131 -0.273,-3.349 -1.008,-5.664c-0.838,-2.64 -2.176,-6.466 -2.176,-6.466c0,0 -0.001,0.054 -0.001,0.071c0,-0.92 -0.747,-1.667 -1.667,-1.667c-0.919,0 -1.666,0.747 -1.666,1.667c-0,0.253 0.085,0.757 0.292,1.429c0.323,1.045 0.951,2.732 1.554,4.501c0.489,1.434 0.964,2.924 1.221,4.14c0.125,0.595 0.22,1.096 0.163,1.439c-0.24,1.433 -1.198,2.796 -2.362,4.085c-2.036,2.255 -4.748,4.231 -6.49,5.7c-4.224,3.562 -29.156,14.289 -34.113,15.215c-6.654,1.243 -13.424,3.492 -20.032,1.002Zm-4.827,-7.918c-0.197,0.401 -0.553,0.723 -1.015,0.862c0.408,-0.122 0.796,-0.368 1.015,-0.862Z"
        fill=" #c07777"
      />
      <path
        d="M103.604,118.473l-0.001,-0.005c-0.214,-0.895 -1.113,-1.448 -2.008,-1.234c-0.52,0.124 -1.032,0.437 -1.23,1.21c-0.024,0.091 -0.139,0.587 0.162,1.31c0.451,1.087 2.506,5.199 4.801,8.193c1.095,1.428 2.266,2.601 3.338,3.21c0.8,0.454 1.818,0.173 2.272,-0.628c0.454,-0.8 0.173,-1.818 -0.627,-2.272c-1.059,-0.6 -2.168,-2.02 -3.204,-3.541c-1.717,-2.521 -3.149,-5.392 -3.502,-6.24l-0.001,-0.003Zm-0.063,0.969c-0.188,0.5 -0.614,0.901 -1.172,1.034c0.478,-0.114 0.948,-0.388 1.172,-1.034Zm0.014,-0.039l-0.012,0.034l0.009,-0.024l0.003,-0.01Z"
        fill=" #c07777"
      />
      <path
        d="M112.601,115.195c-0.087,-0.251 -0.235,-0.485 -0.444,-0.678c-0.739,-0.684 -1.442,-0.456 -1.784,-0.311c-0.408,0.173 -0.911,0.52 -1.005,1.347c-0.004,0.037 -0.054,0.477 0.248,1.132c0.508,1.102 2.721,5.511 5.221,8.721c1.193,1.531 2.472,2.788 3.659,3.433c0.808,0.439 1.821,0.139 2.26,-0.669c0.439,-0.808 0.139,-1.821 -0.669,-2.26c-1.193,-0.648 -2.428,-2.197 -3.573,-3.857c-1.901,-2.754 -3.467,-5.887 -3.871,-6.764l-0.042,-0.094Zm-1.007,2.112c-0.567,0.205 -1.226,0.095 -1.699,-0.342c0.684,0.631 1.335,0.483 1.699,0.342Zm1.064,-1.229c-0.119,0.64 -0.501,0.96 -0.853,1.136c0.162,-0.085 0.313,-0.2 0.445,-0.342c0.214,-0.231 0.349,-0.507 0.408,-0.794Z"
        fill=" #c07777"
      />
      <path
        d="M121.7,112.513c-0.076,-0.657 -0.542,-1.234 -1.219,-1.417c-0.887,-0.241 -1.804,0.284 -2.045,1.172c-0.057,0.21 -0.098,0.511 -0.019,0.897c0.062,0.303 0.295,0.887 0.716,1.641c1.559,2.784 5.944,8.974 8.088,11.11c0.652,0.649 1.708,0.647 2.357,-0.004c0.649,-0.652 0.647,-1.708 -0.004,-2.357c-2.221,-2.213 -7.047,-9.133 -7.874,-11.042Z"
        fill=" #c07777"
      />
      <path
        d="M128.142,109.92l0.057,0.091c1.025,1.673 6.371,10.891 7.368,11.865c0.658,0.643 1.714,0.63 2.357,-0.028c0.643,-0.658 0.63,-1.714 -0.028,-2.357c-0.939,-0.917 -5.89,-9.647 -6.855,-11.222c-0.628,-1.024 -1.533,-1.047 -1.585,-1.047c-0.549,-0 -0.976,0.22 -1.3,0.621c-0.166,0.206 -0.457,0.61 -0.35,1.303c0.045,0.293 0.164,0.556 0.336,0.774Zm2.9,-0.523c-0.17,0.532 -0.602,0.961 -1.167,1.108c0.522,-0.118 0.963,-0.433 1.167,-1.108Zm0.056,-0.237l-0.005,0.032l0.002,-0.011l0.003,-0.021Zm0.02,-0.184l0.002,-0.081c0.001,0.088 -0.006,0.167 -0.017,0.236l0.009,-0.073c0.002,-0.027 0.004,-0.055 0.006,-0.082Zm0,-0.158l0.002,0.072l-0,-0.042l-0.002,-0.03Zm-0.006,-0.085l0.004,0.053l-0.002,-0.039l-0.002,-0.014Z"
        fill=" #c07777"
      />
      <path
        d="M137.949,105.207l0.006,0.012c0.473,1.02 2.384,5.598 3.489,9.084c0.416,1.315 0.738,2.446 0.738,3.085c-0,0.92 0.746,1.667 1.666,1.667c0.92,-0 1.667,-0.747 1.667,-1.667c-0,-0.844 -0.343,-2.356 -0.894,-4.093c-1.153,-3.636 -3.148,-8.413 -3.642,-9.477c-0.317,-0.685 -0.731,-0.922 -0.779,-0.95c-0.393,-0.229 -0.751,-0.25 -1.034,-0.217c-0.375,0.044 -0.705,0.197 -0.983,0.473c-0.15,0.149 -0.626,0.594 -0.466,1.486c0.039,0.219 0.12,0.42 0.232,0.597Zm2.99,-0.367c-0.109,0.33 -0.321,0.62 -0.603,0.825c0.245,-0.165 0.479,-0.418 0.603,-0.825Zm0.085,-0.565l-0.004,-0.083c0.006,0.085 0.005,0.159 0.001,0.223l0.003,-0.057c-0,-0.028 -0,-0.055 -0,-0.083Zm-0.013,-0.164l0.008,0.071l-0.006,-0.062l-0.002,-0.009Z"
        fill=" #c07777"
      />
      <path
        d="M149.401,100.767c-0.069,-0.79 -0.696,-1.441 -1.513,-1.514c-0.916,-0.081 -1.726,0.596 -1.807,1.513c-0.017,0.189 0.075,0.862 0.393,1.817c0.772,2.316 2.824,7.597 2.824,10.012c-0,0.92 0.747,1.667 1.667,1.667c0.92,-0 1.666,-0.747 1.666,-1.667c0,-2.966 -2.698,-9.928 -3.209,-11.744l-0.021,-0.084Z"
        fill=" #c07777"
      />
      <path
        d="M153.189,97.775c0.05,0.125 0.42,1.05 0.652,1.826c0.818,2.745 1.772,7.129 1.772,8.8c-0,0.92 0.746,1.666 1.666,1.666c0.92,0 1.667,-0.746 1.667,-1.666c-0,-2.118 -1.325,-8.175 -2.294,-10.946c-0.349,-0.998 -0.745,-1.661 -0.987,-1.905c-0.648,-0.653 -1.704,-0.658 -2.357,-0.01c-0.614,0.609 -0.655,1.579 -0.119,2.235Z"
        fill=" #c07777"
      />
      <path
        d="M125.687,76.776c5.297,-1.401 13.425,-1.192 20.058,-0.038c4.233,0.736 7.855,1.813 9.589,3.204c0.718,0.576 1.768,0.461 2.343,-0.257c0.576,-0.717 0.461,-1.767 -0.257,-2.343c-2.018,-1.619 -6.178,-3.031 -11.103,-3.888c-7.104,-1.236 -15.809,-1.401 -21.482,0.099c-0.89,0.235 -1.421,1.148 -1.186,2.038c0.236,0.889 1.149,1.42 2.038,1.185Z"
        fill=" #c07777"
      />
      <path
        d="M119.25,85.293c1.832,-0.921 5.838,-1.611 9.811,-2.003c3.974,-0.393 7.924,-0.487 9.659,-0.038c0.891,0.23 1.801,-0.306 2.031,-1.197c0.23,-0.89 -0.306,-1.8 -1.196,-2.031c-1.945,-0.502 -6.37,-0.491 -10.822,-0.051c-4.454,0.44 -8.926,1.309 -10.98,2.342c-0.822,0.413 -1.154,1.416 -0.741,2.237c0.413,0.822 1.416,1.154 2.238,0.741Z"
        fill=" #c07777"
      />
      <path
        d="M95.306,256.441c0.123,0.02 0.379,0.066 0.536,0.119c0.599,0.205 1.182,0.544 1.49,0.749c2.796,1.857 5.053,4.473 7.347,6.759c0.651,0.649 1.707,0.647 2.357,-0.005c0.649,-0.651 0.647,-1.707 -0.005,-2.357c-2.444,-2.435 -4.875,-5.195 -7.854,-7.174c-0.687,-0.456 -2.252,-1.288 -3.518,-1.415c-0.937,-0.094 -1.759,0.143 -2.361,0.676c-0.689,0.609 -0.753,1.664 -0.143,2.352c0.553,0.624 1.471,0.735 2.151,0.296Z"
        fill=" #c07777"
      />
      <path
        d="M117.028,259.149c0.139,0.336 2.055,3.705 3.567,7.11c0.892,2.006 1.682,4.009 1.682,5.261c0,0.92 0.747,1.666 1.667,1.666c0.92,0 1.667,-0.746 1.667,-1.666c-0,-1.205 -0.487,-2.976 -1.234,-4.868c-1.532,-3.878 -4.106,-8.383 -4.267,-8.773c-0.351,-0.851 -1.326,-1.256 -2.176,-0.906c-0.851,0.351 -1.256,1.326 -0.906,2.176Z"
        fill=" #c07777"
      />
      <path
        d="M178.775,179.863c0.291,0.047 0.599,0.018 0.893,-0.101c0.852,-0.345 1.264,-1.318 0.918,-2.17c-0.107,-0.266 -0.581,-1.127 -1.852,-1.082c-1.507,0.053 -8.85,1.878 -12.764,10.689c-3.61,8.129 1.721,16.989 10.782,16.989c0.92,0 1.667,-0.747 1.667,-1.667c0,-0.919 -0.747,-1.666 -1.667,-1.666c-6.544,-0 -10.343,-6.432 -7.735,-12.303c2.895,-6.518 9.005,-8.471 9.758,-8.689Zm-0.9,-0.455l0.01,0.009l-0.019,-0.018l0.009,0.009Zm-0.299,-0.397c0.069,0.13 0.16,0.26 0.283,0.381c-0.111,-0.111 -0.206,-0.239 -0.283,-0.381Zm-0.033,-0.063l0.017,0.033l-0.024,-0.049l0.007,0.016Z"
        fill=" #c07777"
      />
      <path
        d="M155.62,340.543c-0.074,-0.321 -0.233,-1.064 -0.272,-1.658c-0.137,-2.125 0.081,-4.871 0.319,-5.699c0.048,-0.048 0.199,-0.198 0.317,-0.282c0.365,-0.261 0.856,-0.497 1.434,-0.69c3.063,-1.026 8.326,-0.716 12.104,4.713c0.526,0.755 1.565,0.941 2.32,0.416c0.755,-0.526 0.942,-1.565 0.416,-2.32c-4.94,-7.098 -11.894,-7.311 -15.898,-5.97c-2.169,0.726 -3.508,2.037 -3.833,3.009c-0.41,1.225 -0.877,7.116 -0.098,9.517c0.44,1.358 1.329,1.969 2.17,2.051c0.916,0.09 1.732,-0.581 1.821,-1.496c0.065,-0.661 -0.266,-1.269 -0.8,-1.591Z"
        fill=" #c07777"
      />
    </g>
  </Box>
))

export default Ipad