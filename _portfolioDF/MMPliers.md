---
layout: single
title: "Multi-Material FFF Pliers"
excerpt: "Functional needle nose pliers, printed in place through PLA and TPU dual extrusion. No assembly required."
header:
  image: "/assets/img/mmpliers.jpg"
  teaser: "/assets/img/mmpliers.jpg"
---

These pliers were filament printed from a combination of PLA and 95A TPU. As seen in the photo above and the CAD 
model below, the gray arms and jaws are PLA, while the blue center connector piece is TPU. Due to the geometry of the connector as well as the inherent 
flexibility of TPU, the pliers are fully functional. That is, when the handles are pressed together, the jaws clamp
together. Moreover, the TPU piece acts as a spring, and the pliers automatically open again when released.

Since PLA and TPU do not adhere to each other chemically when filament printed, some mechanical connection is 
necessary so that the entire assembly does not just fall apart. Additive manufacturing--specifically FFF in this 
case--allows for the design and creation of mechanical connections not possible when using traditional manufacturing 
techniques. As visible in the model below, the TPU piece extends into each of the "arms" of the pliers. Further, 
four PLA rods run through the TPU piece at every arm, securing it in place. Without these rods, the TPU connector 
could slip off the arms. Moreover, the TPU insert is covered on the top and bottom by PLA to ensure that the 
connector cannot slip from the internal rods. This results in a mechanical connection that could not be created 
separately and assembled afterward. Thus, this model requires in-place manufacturing. Likewise, the connections are 
irreversibly breakable. This highlights one of the benefits of multi-material filament printing: print-in-place 
designs leads to fewer pieces and connectors and therefore fewer points of failure in the final product. In this case, 
as soon as the pliers are printed, they just *exist*.

The design of the spring component was created by drawing inspiration from other designs. Specifically, the waffle-shaped 
pattern seemed standard across pliers I found online. Still, the dimensions which would result in an 
effective piece were unknown. Ie. while thinner walls would grant more flexibility, they would also make the piece 
less sound
structurally. The only way to determine the amount of movement that would be induced in the tips of the pliers was 
to print a version. Initially, the walls were 1 mm thick, and the pliers almost closed before the handles closed 
fully which prevented further movement. At first, I figured that increasing the distance between the handles would 
close the minimal gap remaining. However, after moving the ends of the handles further apart, the jaws still did not 
close all the way. Thus, it was clear that the wall width of the connector was, in fact, limiting jaw movement. The 
walls of the TPU connector component were decreased to 0.8 mm which resulted in fully closing jaws.

The finished pliers have a jaw tip length of about 10 mm while the total jaw length is 40 mm. They also have a jaw 
capacity of 6 mm, although with more iterations, this could be increased as even when the jaws are fully closed, 
the handles have more room to move toward each other. Further, since the connector was printed with 100% infill to 
increase stability, the 0.8 mm connector wall size seems to still be plenty durable, and an even thinner wall size 
could likely be used.

Unfortunately, more iterations of the design were not possible given the timeframe of the project. This is due to 
the significant amount of time it takes to print this design. Indeed, because TPU is an elastic filament, it must be 
printed more slowly than PLA. Moreover, its elasticity means both that it is prone to leaking from the extruder 
while not being actively used and that it takes longer for the nozzle to extrude at a constant speed after rest. 
Therefore, whenever the TPU extruder is activated, the ooze must be cleaned and the nozzle must be primed. To 
ensure this happens properly, a 40mm thick wipe tower was utilized. This gives the nozzle plenty of time to 
establish a smooth flow of molten plastic but also provides a surface that will "snag" filament that has oozed onto 
the nozzle while it was inactive.

On top of this, TPU requires different print settings from PLA to print smoothly. Specifically, the TPU in this 
project was printed at 240°C, with a max print speed of 25 mm/s, and a 15mm/s retraction speed. The higher 
temperature is required to melt the TPU, while the slower speeds are required to give the nozzle time to properly 
force the elastic TPU to move.

<iframe src="https://a360.co/3IThZDZ" width="800" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>
{% include gallery caption="CAD Design for Multi-Material Pliers" %}