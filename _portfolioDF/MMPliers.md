---
layout: single
title:  "Multi-Material FFF Pliers"
header:
  teaser: "unsplash-gallery-image-2-th.jpg"
---

These pliers were filament printed from a combination of PLA and 95A TPU. As seen below, the gray (including gray 
transparent) arms and jaws are PLA, while the blue center connector piece is TPU. Due to the geometry of the 
connector as well as the inherent flexibility of the material, the pliers are fully functional. That is, when the 
handles are pressed, the jaws clamp together. Moreover, the TPU acts a spring, and the pliers open again when released.

Since PLA and TPU do not adhere to each other chemically when filament printed, some mechanical connection is 
necessary so that the entire assembly does not just fall apart. Additive manufacturing--specifically FFF in this 
case--allows for the design and creation of mechanical connections not possible when using traditional manufacturing 
techniques. As visible in the model below, the TPU piece extends into each of the "arms" of the pliers. Further, 
four PLA rods run through the TPU piece at every arm, securing it in place. Without these rods, the TPU connector 
could slip off the arms. This is a mechanical connection which could not be created separately and assembled, 
requiring instead to be manufactured in-place. Likewise, the connections are irreversibly breakable. This highlights 
one of the benefits of multi-material filament printing: fewer pieces and connectors means fewer points of failure. 
The pliers just *are*.

The design of the spring component was created by drawing inspiration from other designs. Specifically, the waffle 
shaped pattern seemed standard across pliers I found online. Still, the dimensions which would result in an 
effective piece were unknown. Thinner walls would mean more flexibility, but at the cost of being not sound 
structurally. The only way to determine the amount of movement that would be induced in the tips of the pliers was 
to print a version. Initially, the walls were 1 mm thick, and the pliers almost closed before the handles closed 
fully, preventing further movement. At first, I figured that increasing the distance between the handles would 
close the minimal gap remaining. However, after moving the ends of the handles further apart, the jaws still did not 
close all the way. Thus, it was clear that the wall width of the connector was, in fact, limiting jaw movement. The 
walls were decreased to 0.8 mm which resulted in fully closing jaws.

The finished product has a jaw tip length of about 10 mm while the total jaw length is 40 mm. It also has a jaw 
capacity of 6 mm, although, with more iterations, this could be increased as, even when the jaws are fully closed, 
the handles have more room to move towards each other. Further, since the connector was printed with 100% infill to 
increase stability, the 0.8 mm connector wall size seems to still be plenty durable, so an even thinner wall size 
could be tried.

Unfortunately, more iterations of the design were not possible given the timeframe of the project. This is due to 
the significant amount of time it takes to print this design. Indeed, because TPU is an elastic filament, it must be 
printed more slowly than PLA. Moreover, its elasticity means both that it is prone to 
leaking from the extruder while not being actively used and that it takes longer for the nozzle to extrude at a 
constant speed after rest. Therefore, whenever the TPU extruder is activated, the ooze must be cleaned and the 
nozzle must be primed. To ensure this happens properly, a wipe tower was utilized. This gives the nozzle plenty of 
time to establish a smooth flow of molten plastic but also provides a surface which will "snag" filament that has 
oozed onto the nozzle while it was inactive.

<iframe src="https://a360.co/3IThZDZ" width="800" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>
{% include gallery caption="CAD Design for Multi-Material Pliers" %}

#